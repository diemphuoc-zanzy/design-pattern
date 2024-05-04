import { Injectable } from '@nestjs/common';
import { Price } from './dtos/price';
import { TypePromotion } from './common/constants';

@Injectable()
export class StrategyPatternService {
  async getPriceNonePattern(price: Price): Promise<number> {
    // giảm giá khi người dùng đặt trước một sản phầm của VINFAST
    if (price.typePromotion === 'preOrder') {
      return price.originalPrice * 0.8; // giảm 20%
    } // Ở giai đoạn này nếu như bạn đã biết về nguyên tắc SOLID thì nó đã phá vỡ nguyên tắc đầu tiền.
    // Đó là nguyên tắc Trách Nhiệm Duy Nhất ( Single Responsibility Prince).

    // Tiếp tục thêm tính năng khuyến mãi thông thường ví dụ nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30.
    if (price.typePromotion === 'promotion') {
      return price.originalPrice <= 200
        ? price.originalPrice * 0.9
        : price.originalPrice - 30;
    }

    // Thời xưa chưa có marketing như bây giờ.
    if (price.typePromotion === 'default') {
      return price.originalPrice;
    }
  }

  /** ====================================================================================== */

  async getPriceHavePattern(price: Price): Promise<number> {
    return TypePromotion[price.typePromotion](price.originalPrice);
  }
}
