
## Chú thích
Trong <b>Lập Trình Hướng Đối Tượng (OOP),</b> <b>Facade Pattern</b> là một [mẫu thiết kế phần mềm](https://vi.wikipedia.org/wiki/M%E1%BA%ABu_thi%E1%BA%BFt_k%E1%BA%BF_ph%E1%BA%A7n_m%E1%BB%81m) nhằm cung cấp một giao diện (<i>interface</i>) đơn giản giúp che giấu phần mã cấu trúc phức tạp phía sau, ví dụ như là một thư viện lớp (<i>class library</i>). 

<b>Facade pattern có thể:</b>
- Cung cấp một giao diện đơn giản cho việc thực thi nhiều hành vi phổ biến trong một hành vi duy nhất.
- Giúp cho một ứng dụng trở nên đơn giản hơn trong việc kiểm soát, thay thế hành vi (method) sử dụng và sử dụng các đặt tên phù hợp để làm cho ứng dụng dễ hiểu hơn;
- Giảm sự phụ thuộc của các khối mã bên ngoài với các hành vi tính toán phức tạp trong hệ thống nhằm đạt được sự phụ thuộc lỏng lẻo;
- Giải quyết các vấn đề thiết kế định kỳ để thiết kế phần mềm hướng đối tượng linh hoạt và có thể tái sử dụng, tức là các đối tượng dễ triển khai, thay đổi, kiểm tra và tái sử dụng hơn.

<b>Facade</b> thường được sử dụng trong việc thực thi các cuộc gọi từ xa đòi hỏi tiêu tốn nhiều tài nguyên (thời gian và năng lượng tính toán)

Nó cũng được sử dụng trên 1 hệ thống với nhiều triển khai phức tạp nhằm mục đích ẩn đi sự phức tạp đó, giúp lập trình viên tập trung vào mục đích thay vì hành vi của các chức năng.

### Mẫu thiết kế Facade có thể giải quyết những vấn đề gì?
- Để làm cho hệ thống con phức tạp dễ sử dụng hơn, cần cung cấp một giao diện đơn giản cho một tập hợp các giao diện trong hệ thống con.
- Sự phụ thuộc vào một hệ thống con nên được giảm thiểu.

Các máy khách truy cập trực tiếp vào một hệ thống con phức tạp sẽ tham chiếu trực tiếp (phụ thuộc vào) nhiều đối tượng khác nhau có các giao diện khác nhau (khớp nối chặt chẽ), điều này khiến các máy khách khó triển khai, thay đổi, kiểm tra và tái sử dụng.

### Mẫu thiết kế Facade mô tả giải pháp gì?
Define a Facade object that

- Thực hiện một giao diện đơn giản về mặt (bằng cách ủy quyền) các giao diện trong hệ thống con và có thể thực hiện chức năng bổ sung trước/sau khi chuyển tiếp yêu cầu.

Điều này cho phép làm việc thông qua đối tượng Facade để giảm thiểu sự phụ thuộc vào hệ thống con.
Xem thêm lớp UML và sơ đồ trình tự bên dưới.

## Cách sử dụng
Facade được sử dụng khi mong muốn có giao diện dễ dàng hơn hoặc đơn giản hơn cho đối tượng bên dưới. Ngoài ra, một bộ chuyển đổi có thể được sử dụng khi trình bao bọc phải tôn trọng một giao diện cụ thể và phải hỗ trợ hành vi đa hình. Trình trang trí cho phép thêm hoặc thay đổi hành vi của giao diện trong thời gian chạy.

| Pattern     | Intent                                                                                    |
|-------------|-------------------------------------------------------------------------------------------|
| Adapter     | Chuyển đổi giao diện này sang giao diện khác để phù hợp với những gì khách hàng mong đợi  |
| Decorator   | Tự động thêm trách nhiệm vào giao diện bằng cách gói mã gốc                               |
| Facade      | Cung cấp một giao diện đơn giản hóa                                                       |

Facade pattern thường được sử dụng khi:
- cần có một giao diện đơn giản để truy cập vào một hệ thống phức tạp,
- một hệ thống rất phức tạp hoặc khó hiểu,
- cần có một điểm vào cho mỗi cấp độ của phần mềm phân lớp, hoặc
- sự trừu tượng hóa và triển khai của một hệ thống con được kết hợp chặt chẽ với nhau.

## Cấu trúc
### UML class and sequence diagram
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facade_Design_Pattern_Class_Diagram_UML.svg" width="90%" alt="Design Pattern" />
</p>
Trong sơ đồ UML class diagram, lớp Máy khách không truy cập trực tiếp vào các lớp hệ thống con. Thay vào đó, Máy khách hoạt động thông qua lớp Facade triển khai giao diện đơn giản về mặt (bằng cách ủy quyền cho) các lớp hệ thống con (Class1, Class2 và Class3). Máy khách chỉ phụ thuộc vào giao diện Facade đơn giản và độc lập với hệ thống con phức tạp.

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Facade_Design_Pattern_Sequence_Diagram_UML.svg" width="90%" alt="Design Pattern" />
</p>
Sơ đồ sequence diagram hiển thị các tương tác trong thời gian chạy: Đối tượng Client hoạt động thông qua đối tượng Facade ủy quyền yêu cầu cho các phiên bản Class1, Class2 và Class3 thực hiện yêu cầu.

### UML class diagram
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Example_of_Facade_design_pattern_in_UML.png" width="90%" alt="Design Pattern" />
</p>

<b>Facade</b>

    Lớp Facade trừu tượng hóa các Gói 1, 2 và 3 khỏi phần còn lại của ứng dụng.

<b>Clients</b>

    Các đối tượng đang sử dụng Mẫu mặt tiền để truy cập tài nguyên từ Gói.

## Ví dụ
### Java
Ví dụ sau đây cung cấp một facade đơn giản hơn trên các hành vi phúc tạp:

```Javascript
    /* Complex parts */
    
    class CPU {
        public void freeze() { ... }
        public void jump(long position) { ... }
        public void execute() { ... }
    }
    
    class Memory {
        public void load(long position, byte[] data) { ... }
    }
    
    class HardDrive {
        public byte[] read(long lba, int size) { ... }
    }
    
    /* Facade */
    
    class ComputerFacade {
        private CPU processor;
        private Memory ram;
        private HardDrive hd;
    
        public ComputerFacade() {
            this.processor = new CPU();
            this.ram = new Memory();
            this.hd = new HardDrive();
        }
    
        public void start() {
            processor.freeze();
            ram.load(BOOT_ADDRESS, hd.read(BOOT_SECTOR, SECTOR_SIZE));
            processor.jump(BOOT_ADDRESS);
            processor.execute();
        }
    }
    
    /* Client */
    
    class You {
        public static void main(String[] args) {
            ComputerFacade computer = new ComputerFacade();
            computer.start();
        }
    }
```