
## Mục đích
Định nghĩa và bao bọc các thuật toán có cùng mục đích trong những lớp có giao diện chung. Làm cho sự thay đổi thuật toán trở nên linh động và độc lập với khách hàng.

## Được biết đến với tên khác Policy (đường lối)
<b>Động lực thúc đẩy</b> Nhiều thuật toán khác nhau cóthể áp dụng để tách đoạn văn thành từng dòng thích hợp.[Giải pháp viết trực tiếp (hard- coding)]() những thuật toán vào khách hàng [có những điểm bất lợi sau](): Khách hàng dùng nhiều thuật toán trở nên phức tạp vì chứa đựng mã nguồn lớn. Làm cho chúng chiếm nhiều tài nguyên và khó duy tu bảo dưỡng. Mỗi thuật toán tối ưu cho từng trường hợp nhất định. Chúng ta không thể cài đặt tất cả, trong khi ta chỉ dùng một số ít thuật toán. Thêm thuật toán và thay đổi thuật toán hiện có trở lên khó khăn vì chúng là một phần mã nguồn. Ta có thể vượt qua những bất lợi nêu trên bằng cách định nghĩa lớp bao bọc các thuật toán chia dòng. Những thuật toán được bao bọc vì mục đích này gọi là [strategy (chiến lược)]().

Giả sử lớp [Composition]() có trách nhiệm bảo dưỡng và thay đổi các thuật toán ["Chia dòng"]() được dùng cho một trường hiển thị văn bản (text viewer). Thay vì được cài đặt trong [Compositon](), các thuật toán này được cài đặt trong các lớp con của lớp [Compositor trừu tượng](). Các lớp con này thực hiện các thuật toán sau: [SimpleCompositor]() cài đặt [thuật toán chia từng dòng TexCompositor]() cài đặt [thuật toán theo kiểu TeX](). Tìm dòng tối ưu theo kiểu toàn bộ, từng chương một [ưArrayCompositor]() cài đặt thuật toán chia dòng với số phần tử cho từng dòng cố định, hữu hiệu khi ta muốn chia dòng 1 văn bản chứa các icon vào trong các dòng. [Composition chứa 1 tham chiếu tới đối tượng Compositor](). Khi Composition chia dòng nó ủy nhiệm trách nhiệm cho đối tượng Compositor này. Khách hàng sử dụng Composition sẽ định nghĩa thuật toán mong muốn bằng cách đặt Compsitor thích hợp vào Composition.


<b>Trường hợp nào có thể ứng dụng</b> Có thể ứng dụng Strategy trong những trường hợp sau: [Nhiều lớp liên quan chỉ khác nhau ở cách xử lý yêu cầu](). Với 1 lựa chọn trong những cách xử lý Strategy giúp ta thực hiện trách nhiệm của 1 lớp. Có nhiều cách thực hiện cùng một thuật toán. Phải cho khách hàng khả năng lựa chọn cách ưu việt nhất trong sử dụng tài nguyên như chỗ và thời gian. Nên dùng Strategy khi các thuật toán này được thể hiện như một cơ cấu lớp của các thuật toán.

Thuật toán dùng dữ liệu mà khách hàng không biết tới. Dùng Strategy để thay thế việc công khai hoá những cấu trúc dữ liệu phức tạp, đặc thù cho thuật toán.

Khách hàng định nghĩa nhiều cách xử lý khác nhau và những cách xử lý này có thể coi như câu lệnh chia nhánh (if- then- elsif, switch) trong phương thức. Thay vì dùng cấu trúc điều kiện ta dùng các lớp Strategy cài đặt riêng từng nhánh.

<b>Cấu trúc</b>
<b>Các lớp tham gia(Participants)</b> Strategy (Compositor)- Định nghĩa giao diện chung cho các thuật toán được cài đặt. Context dùng giao diện này để gọi những thuật toán được thực hiện trong những ConcreteStrategy (Strategey cụ thể) ConcreteStrategy (SimpleCompositor, TeXCompositor, ArrayCompositor) - Cài đặt các thuật toán sử dụng giao diện Strategy Context (môi trường)- (Composition) - Được hiệu chỉnh bằng 1 đối tượng Strategy -Bảo dưỡng tham chiếu tới đối tượng Strategy - Có thể định nghĩa giao diện cho Strategy dùng được dữ liệu của nó

<b>Phối hợp(Colaboration)</b> - Strategy và Context trao đổi thông tin để thực hiện thuật toán. Context có thể chuyển cho Strategy tất cả dữ liệu khi thuật toán được gọi. Giải pháp khác là Context chuyển chính nó cho Strategy như một hàm số. Strategy gọi lại những phương thức được định nghĩa trong giao diện của Context để hỏi dữ liệu. - Context chuyển lời gọi phương thức từ khách hàng của nó cho Strategy. Khách hàng thường tạo ra và chuyển cho Context một ConcreteStrategy, sau đó khách hàng chỉ trao đổi thông tin với Context. Thông thường khách hàng có thể lựa chọn ConcreteStrategy từ 1 tập hợp thuật toán cho trước.

<b>Kết quả(Consequences)</b> Strategy có những ưu khuyết điểm sau: Tập trung và hệ thống hóa những thuât toán có liên quan. Hệ thống thừa kế của các lớp Strategy định nghĩa một gia đình của các thuật toán hoặc cách xử lý hiện tượng cho môi trường dùng. Thừa kế giúp ta thể hiện được phần chung trong tác dụng của các thuật toán. Một sự chọn lựa khác thay cho thừa kế. Bằng thừa kế ta cũng có thể phối hợp nhiều kiểu thuật toán và cách xử lý hiện tượng. Ta có thể thừa kế trực tiếp từ Context và cho nónhững sử sự khác nhau. Nhưng giải pháp này gắn chặt cách xử lý hiện tượng vào đối tượng Context, gây ra lẫn giữa cài đặt thuật toán và Context, gây khó khăn cho việc học, bảo dưỡng, mở rộng Context, vàchúng ta không thể kết hợp các thuật toán một cách ling động. Giải pháp này sẽ tạo ra rất nhiều lớp tương tự, chỉ khác nhau ở thuật toán hoặc cách xử lý hiện tượng mà chúng thực hiện. Bao bọc thuật toán bởi các lớp khác nhau cho ta kết hợp các thuật toán độc lập đối với môi trường sử dụng, đơn giản hoá việc hiểu, chọn và mở rộng từng thuật toán. Bỏ đi các câu lệnh điều kiện (if-then-else, switch). Mẫu thiết kế Strategy cho ta một cách giải quyết khác ngoài cách dùng câu lệnh điều kiện trong quá trình chọn cách xử lý thích hợp. Khi những cách xử lý khác nhau bị gói vào một lớp, dùng câu lệnh điều kiện để chọn thao tách thích hợp rất khó khăn. Ta có thể thay những câu lệnh này bằng cách bao bọc các thuật toán bởi các lớp khác nhau. Ví dụ nếu không có Strategy, việc "chia dòng" được thực hiện như sau:

``` Javascript
void Composition::Repair ()
   {
       switch (_breakingStrategy)
        {
            case SimpleStrategy:
                         ComposeWithSimpleCompositor();
                          break;
            case TeXStrategy:
                          ComposeWithTeXCompositor();
                          break;
             //...
        }
        // merge results with existing composition, if necessary (gắn kết
       //quả với phần đã làm được)
  }
```
Mẫu thiết kế Strategy thay việc sử dụng câu lệnh điều kiện bằng ủy nhiệm việc chia dòng cho đối tượng Strategy:
``` Javascript
void Composition::Repair ()
   {
       _compositor->Compose();
        // merge results with existing composition, if necessary(gắn kết
        // quả với phần đã làm được)
   }
```
Mã nguồn chứa câu lệnh điều kiện nhiều nhánh làtrường hợp khi ta lên nghiên cứu xem dùmg mẫu Strategy có phải làgiải pháp thích hợp hơn không. Lựa chọn về cách cài đặt. Strategycó thể cài đặt cùng một kiểu xử lý bằng nhiều cách khác nhau. Khách hàng có điều kiện chọn giữa nhiều cách thực hiện với yêu cầu về chỗ và thời gian khác nhau. (khách hàng sẽ chọn cách thực hiện tối ưu đối với nó trong từng trường hợp cụ thể) Khách hàng phải biết vềcác Strategy. Nhược điểm hiển nhiên của Strategy là khách hàng phải nhận biết về các Strategy trước khi chọn cái thích hợp, như vậy khách hàng có thể bị "gò ép" theo những yêu cầu nảy sinh trong quátrình cài đặt cụthể.Chỉ nên dùng Strategy khi sự thay đổi về cách xử lý là rất quan trọng đối với khách hàng. Quá tải thông tin giữa Strategy và Context. Giao diện của Context được công khai hoá cho tất cảStrategy cụ thể, dù thuật toán được thực hiện phức tạp hay đơn giản. Rõràng là nhiều Strategy sẽ không dùng hết những thông tin có thểnhận được thông qua giao diện này, Strategy đơn giản thậm chí hoàn toàn không dùng giao diện. Điều này có nghĩa là Context có thể tạo ra và cho giá trị mặc định cảnhững tham chiếu mà nó không bao giờ được dùng đến. Khi đó bạn sẽ có mối quan hệ qua khăng khít giữa Strategy vàContext. Tăng số đối tượng. Strategy làm tăng số đối tượng trong hệ thống. Ta có thể giảm bớt bằng cách làm những Strategy vô trạng thái (dữ liệu) để nhiều đối tượng dùng chung (share). Những trạng thái cần thiết sẽ được bảo dưỡng bởi môi trường và được chuyển cho trategy như các tham chiếu. Strategy dùng chung không bảo dưỡng được trạng thái qua những lần được sử dụng. Mẫu thiết kế Flightweight(195) sẽ đề cập cụ thể hơn đến vấn đề này.

<b>Cài đặt</b> Những vấn đề cần nghiên cứu khi ứng dụng mẫu thiết kế Strategy:
<ul>
    <li>Định nghĩa giao diện cho Strategy và Context:</li>
</ul>
Các giao diện này phải tạo điều kiện cho các Strategy cụ thể truy nhập thông tin cần thiết từmôi trường tính toán vàngược lại.Giải pháp độc lập hóa Context và Strategy là cho Context chuyển toàn bộ dữ liệu cần thiết cho Strategy qua phương thức.Nhược điểm ở đây là Context cóthểcho Strategy cả những thông tin không cần thiết cho quátrình tính toán. Kỹ thuật khác là Context chuyển chính nó như một tham số cho Strategy, để Strategy tự lấy thông tin khi cần thiết qua giao diện của Context.Lợi thế của giải pháp là Strategy lấy được lượng thông tin cần và đủ cho thuật toán. Nhưng giao diện của Context phải được định nghĩa thật đầy đủ cho nhu cầu dữliệu của Strategy trừu tượng, buộc quan hệ giữa Strategy và Context phải khăng khít hơn để thoả mãn nhu cầu này. Nhu cầu đối với những thuật toán nhất định và những đòi hỏi về thông tinh tính toán của chúng sẽ xác định ta nên sử dụng kỹ thuật nào

<ul>
    <li>Strategy thay cho tham số mẫu (template):</li>
</ul>
Trong C++ ta có thể dùng các template để tạo lớp tương tự như strategy. Kỹ thuật này chỉ khả thi khi Strategy được chọn trong thới gian dịch và không thay đổi trong quátrìng thực hiện. Trong trường hợp này, lớp được tạo ra (ví dụ như Context) được định nghĩa là lớp.

``` Javascript
Template với Strategy là tham sốmẫu:
   template <class AStrategy>
   class Context {
       void Operation() { theStrategy.DoAlgorithm();
       //...
   private:
       AStrategy theStrategy;
   };  
```
Sau đó lớp Context được cấu hình (configure) bằng một Strategy cụ thể:

``` Javascript
class MyStrategy {   // Strategy cụ thể
   public:
   void DoAlgorithm();  
   };
   Context<MyStrategy>aContext;
```
Với cách này ta không cần đến Strategy trừu tượng mà vần có thể gắn Strategy cụ thể cho Context theo cách tĩnh (trong thời gian dịch), gắn kiểu này có thể tăng năng suất cho hệ thống..

<ul>
    <li>Đối tượng Strategy không bắt buộc (optional).</li>
</ul>
Context có khả năng làm đơn giản hóa nếu nó là không cóý nghĩa để có một Stategy Object. Context sẽ xem đối tượng Strategy của nó có null hay không trước khi dùng, nếu có nó sẽ sử dụng như bình thường, nếu không Context hoạt động theo cách mặc định. Ưu điểm của giải pháp là khách hàng không phải quan tâm đến Strategy nếu không muốn thay đổi thuật toán mặc định.