
## Chú thích
Trong thiết kế và kỹ thuật phần mềm, Mẫu mẫu Observer là một mẫu thiết kế phần mềm trong đó một Object, được đặt tên là subject, duy trì một danh sách những người phụ thuộc của nó, được gọi là Observer và tự động thông báo cho họ về bất kỳ thay đổi trạng thái nào, thường bằng cách gọi một trong các phương thức của họ.

Nó thường được sử dụng để triển khai các hệ thống xử lý sự kiện phân tán trong phần mềm hướng sự kiện. Trong các hệ thống như vậy, subject thường được đặt tên là "dòng sự kiện" hoặc "nguồn sự kiện" trong khi Observer được gọi là "nguồn sự kiện". Danh pháp luồng ám chỉ đến một thiết lập vật lý trong đó Observer được tách biệt về mặt vật lý và không có quyền kiểm soát các sự kiện được phát ra từ nguồn chủ đề/luồng. Do đó, mẫu này phù hợp với bất kỳ quy trình nào trong đó dữ liệu đến từ một số đầu vào không có sẵn cho CPU khi khởi động mà thay vào đó dường như đến ngẫu nhiên (yêu cầu HTTP, dữ liệu GPIO, đầu vào của người dùng từ thiết bị ngoại vi và cơ sở dữ liệu phân tán, v.v.).

## Mục đích
Mẫu mẫu Observer là một mẫu hành vi được liệt kê trong số 23 mẫu thiết kế "Gang of Four" nổi tiếng nhằm giải quyết các thách thức thiết kế định kỳ nhằm thiết kế phần mềm hướng Object linh hoạt và có thể tái sử dụng, tạo ra các Object dễ thực hiện, thay đổi, kiểm tra hơn và tái sử dụng.

Định nghĩa và bao bọc các thuật toán có cùng mục đích trong những lớp có giao diện chung. Làm cho sự thay đổi thuật toán trở nên linh động và độc lập với khách hàng.
Mẫu quan sát giải quyết các vấn đề sau:

<ul>
<li> Cần xác định sự phụ thuộc một-nhiều giữa các Object mà không làm cho các Object được liên kết chặt chẽ.</li> 
<li> Khi một Object thay đổi trạng thái, một số Object phụ thuộc mở sẽ được cập nhật tự động.</li> 
<li> Một Object có thể thông báo cho nhiều Object khác.</li>
</ul>

Việc xác định sự phụ thuộc một-nhiều giữa các Object bằng cách xác định một Object (chủ đề) cập nhật trực tiếp trạng thái của các Object phụ thuộc là không linh hoạt vì nó kết hợp subject với các Object phụ thuộc cụ thể. Tuy nhiên, nó có thể được áp dụng từ quan điểm hiệu suất hoặc nếu việc triển khai Object được kết hợp chặt chẽ (chẳng hạn như cấu trúc hạt nhân cấp thấp thực thi hàng nghìn lần mỗi giây). Các Object được liên kết chặt chẽ có thể khó thực hiện trong một số trường hợp và không dễ dàng sử dụng lại vì chúng tham chiếu và nhận biết được nhiều Object có giao diện khác nhau. Trong các trường hợp khác, các Object được liên kết chặt chẽ có thể là lựa chọn tốt hơn vì trình biên dịch có thể phát hiện lỗi tại thời điểm biên dịch và tối ưu hóa mã ở cấp lệnh CPU.

<ul>
<li>Xác định các Object subject và Observer.</li>
<li>Khi một subject thay đổi trạng thái, tất cả những Observer đã đăng ký sẽ được thông báo và cập nhật tự động (và có thể không đồng bộ)</li>
</ul>

Trách nhiệm duy nhất của một subject là duy trì một danh sách những Observer và thông báo cho họ về những thay đổi trạng thái bằng cách gọi hoạt động update() của họ. Trách nhiệm của Observer là đăng ký và hủy đăng ký với một subject (để được thông báo về những thay đổi trạng thái) và cập nhật trạng thái của họ (để đồng bộ hóa trạng thái của họ với trạng thái của subject) khi họ được thông báo. Điều này làm cho subject và Observer gắn kết lỏng lẻo. subject và Observer không có kiến thức rõ ràng về nhau. Observer có thể được thêm và xóa độc lập trong thời gian chạy. Tương tác thông báo-đăng ký này còn được gọi là [xuất bản-đăng ký](https://en.wikipedia.org/wiki/Publish-subscribe).


## Ưu điểm và nhược điểm
Mẫu mẫu Observer có thể gây rò rỉ bộ nhớ, được gọi là vấn đề về trình nghe bị mất hiệu lực, vì trong quá trình triển khai cơ bản, nó yêu cầu cả đăng ký rõ ràng và hủy đăng ký rõ ràng, như trong mẫu xử lý, vì subject giữ các tham chiếu mạnh đến Observer, giữ cho chúng tồn tại. Điều này có thể được ngăn chặn nếu Object có những tham chiếu yếu đối với Observer.

## Mô hình Pull và Push
### Ưu điểm và Nhược điểm của Pull
Ưu điểm của việc này là linh hoạt hơn. Mỗi observer có thể tự quyết định những gì cần truy vấn mà không cần dựa vào chủ thể để gửi thông tin chính xác.

Tôi đã ghi nhận những nhược điểm của mô hình 'kéo'. observer sẽ phải biết mọi thứ về chủ đề để truy vấn thông tin phù hợp, điều này dẫn đến A- bị hạ thấp (xấu) hoặc B- có lợi cho các giao diện có thể quan sát cụ thể hơn, cung cấp các phương thức truy cập cụ thể hơn. Ví dụ: AgeObservable cung cấp phương thức getAge().

### Tóm tắt
<p align="center">
  <img src="https://github.com/diemphuoc-zanzy/design-pattern/blob/master/doc/img/pull-of-observer-pattern.png" width="90%" alt="Design Pattern" />
</p>

- <b>Ưu điểm</b>:
  - khi CR7 post 1 status thì chỉ cần save vào Database của CR7

- <b>Nhược điểm</b>:
  - nếu N users thì kéo request...
  - thời gian render ra news feed lâu


### Ưu điểm và Nhược điểm của Push
Ưu điểm chính của mô hình <b>'Push'</b> là khả năng kết nối thấp hơn giữa observer và subject. observer không cần biết gì về chủ đề để truy vấn nó. Nếu cần, chúng ta cần thực hiện một trong những thao tác sau: A- thực hiện downcasting về phía observer để gọi các phương thức get dành riêng cho từng lớp đối với chủ đề. Thật tệ. B- làm cho giao diện có thể quan sát được dành riêng cho từng lớp hơn, cung cấp các phương thức get cụ thể, do đó làm cho mối quan hệ giữa observer và subject ít chung chung hơn và làm cho mọi thứ trở nên gắn kết hơn.

Bằng cách triển khai mô hình 'đẩy', chúng tôi tránh được tất cả những điều này.

Tuy nhiên, nhược điểm là kém linh hoạt hơn: đối tượng không phải lúc nào cũng biết chính xác thông tin mà observer cần để gửi cho họ. Điều này thường có nghĩa là các giao diện Observer cụ thể hơn, chẳng hạn như AgeObserver được thông báo khi 'tuổi' của chủ thể thay đổi và HeightObserver được gửi chiều cao hiện tại của chủ thể trong thông báo.

Đây là một lựa chọn. Cách còn lại là chủ thể gửi toàn bộ rất nhiều thông tin được gói gọn trong một đối tượng Thông tin thuộc loại nào đó và yêu cầu observer truy vấn thông tin đó từ đó. Nhưng một lần nữa, chúng tôi không thể chắc chắn rằng mình đang gửi thông tin chính xác. Vì vậy, đó là điều này hoặc buộc observer phải triển khai các giao diện observer cụ thể hơn, điều này sẽ thắt chặt mối liên kết về phía observer.

### Tóm tắt
<p align="center">
  <img src="https://github.com/diemphuoc-zanzy/design-pattern/blob/master/doc/img/push-of-observer-pattern.png" width="90%" alt="Design Pattern" />
</p>

- <b>Ưu điểm</b>:
  - Chỉ cần truy cập vào danh sách news feed của mình là có data...
  - nhanh, gọn lẹ.

- <b>Nhược điểm</b>:
    - Tỷ lệ ghi cao (lãng phí tài nguyên database), ví dụ CR7 có 1 triệu followers thì 1 triệu bản ghi...
    - Tốc độ nhận tin của người followers có thể chậm hơn người khác.
  
### Push phức tạp hơn nhiều, Thực tế!
<p align="center">
  <img src="https://github.com/diemphuoc-zanzy/design-pattern/blob/master/doc/img/complexity-push-of-observer-pattern.png" width="90%" alt="Design Pattern" />
</p>

### Khi CR7 add status.
<p align="center">
  <img src="https://github.com/diemphuoc-zanzy/design-pattern/blob/master/doc/img/example-push-of-observer-pattern.png" width="90%" alt="Design Pattern" />
</p>

## Khớp nối và triển khai đăng ký xuất bản điển hình
Thông thường, mẫu Observer được triển khai sao cho Object được quan sát là một phần của Object mà các thay đổi trạng thái đang được quan sát <b>(và được truyền đạt tới mẫu Observer)</b>. Kiểu triển khai này được coi là liên kết chặt chẽ, buộc cả Observer và subject phải nhận biết lẫn nhau và có quyền truy cập vào các bộ phận bên trong của họ, tạo ra các vấn đề có thể xảy ra về khả năng mở rộng, tốc độ, phục hồi và bảo trì tin nhắn <b>(còn gọi là mất sự kiện hoặc thông báo)</b> , sự thiếu linh hoạt trong việc phân tán có điều kiện và khả năng cản trở các biện pháp bảo mật mong muốn.
Trong một số triển khai <b>(không bỏ phiếu)</b> của mẫu đăng ký xuất bản, điều này được giải quyết bằng cách tạo một máy chủ hàng đợi tin nhắn chuyên dụng <b>(và đôi khi là một Object xử lý tin nhắn bổ sung)</b> như một giai đoạn bổ sung giữa Observer và Object được quan sát, do đó tách rời các thành phần. Trong những trường hợp này, máy chủ hàng đợi tin nhắn được Observer truy cập bằng mẫu người Observer, đăng ký một số tin nhắn nhất định và chỉ biết <b>(hoặc không biết, trong một số trường hợp)</b> về tin nhắn dự kiến, trong khi không biết gì về chính người gửi tin nhắn; người gửi cũng có thể không biết gì về Observer. Các cách triển khai khác của mẫu đăng ký xuất bản, đạt được hiệu quả tương tự về thông báo và liên lạc với các bên quan tâm, không sử dụng mẫu Observer.

Trong quá trình triển khai ban đầu của các hệ điều hành nhiều cửa sổ như OS/2 và Windows, thuật ngữ "mẫu đăng ký xuất bản" và "phát triển phần mềm hướng sự kiện" được sử dụng làm từ đồng nghĩa với mẫu Observer.

Mẫu Observer, như được mô tả trong sách Mẫu thiết kế, là một khái niệm rất cơ bản và không đề cập đến việc loại bỏ sự quan tâm đến những thay đổi đối với đối tượng được quan sát hoặc logic đặc biệt được thực hiện bởi đối tượng được quan sát trước hoặc sau khi thông báo cho observer  Mẫu này cũng không xử lý việc ghi lại các thông báo thay đổi hoặc đảm bảo rằng chúng được nhận. Những mối quan tâm này thường được xử lý trong các hệ thống xếp hàng tin nhắn, trong đó mẫu Observer chỉ đóng một vai trò nhỏ.

Các mẫu liên quan bao gồm publish–subscribe, mediator và singleton..

## Tách rời
Mẫu observer có thể được sử dụng trong trường hợp không có đăng ký xuất bản, như khi trạng thái mô hình được cập nhật thường xuyên. Cập nhật thường xuyên có thể khiến chế độ xem không phản hồi (ví dụ: bằng cách gọi nhiều lệnh gọi vẽ lại); thay vào đó những observer như vậy nên sử dụng bộ đếm thời gian. Thay vì bị quá tải bởi thông báo thay đổi, observer sẽ khiến khung nhìn biểu thị trạng thái gần đúng của mô hình theo một khoảng thời gian đều đặn. Chế độ quan sát này đặc biệt hữu ích cho các thanh tiến trình, trong đó tiến trình của hoạt động cơ bản thay đổi thường xuyên.

### Kết cấu
### UML class và sequence diagram
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/W3sDesign_Observer_Design_Pattern_UML.jpg" width="90%" alt="Design Pattern" />
</p>

Trong [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) [class diagram](https://en.wikipedia.org/wiki/Class_diagram) này, lớp Chủ đề không cập nhật trực tiếp trạng thái của các đối tượng phụ thuộc. Thay vào đó, Chủ đề tham chiếu đến giao diện Observer (update()) để cập nhật trạng thái, điều này làm cho subject độc lập với cách cập nhật trạng thái của các đối tượng phụ thuộc. Các lớp Observer1 và Observer2 triển khai giao diện Observer bằng cách đồng bộ hóa trạng thái của chúng với trạng thái của subject.

[UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) [sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram) hiển thị các tương tác trong thời gian chạy: Các đối tượng Observer1 và Observer2 gọi Attach(this) trên subject1 để tự đăng ký. Giả sử rằng trạng thái của subject1 thay đổi, subject1 sẽ tự gọi thông báo(). notification() gọi update() trên các đối tượng Observer1 và Observer2 đã đăng ký, yêu cầu dữ liệu đã thay đổi (getState()) từ subject 1 để cập nhật (đồng bộ hóa) trạng thái của chúng.

### UML class diagram
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Observer_w_update.svg" width="90%" alt="Design Pattern" />
</p>

## Ví dụ
Mặc dù các lớp thư viện java.util.Observer và java.util.Observable tồn tại nhưng chúng không được dùng nữa trong Java 9 vì mô hình được triển khai khá hạn chế.

Dưới đây là một ví dụ viết bằng Java lấy dữ liệu đầu vào từ bàn phím và xử lý từng dòng đầu vào dưới dạng một sự kiện. Khi một chuỗi được cung cấp từ System.in, phương thức notificationObservers() sau đó sẽ được gọi để thông báo cho tất cả observer về sự xuất hiện của sự kiện, dưới dạng lệnh gọi các phương thức cập nhật của họ.

### Ngôn ngữ Java
``` Javascript
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

interface Observer {
    void update(String event);
}
  
class EventSource {
    List<Observer> observers = new ArrayList<>();
  
    public void notifyObservers(String event) {
        observers.forEach(observer -> observer.update(event));
    }
  
    public void addObserver(Observer observer) {
        observers.add(observer);
    }
  
    public void scanSystemIn() {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            notifyObservers(line);
        }
    }
}

public class ObserverDemo {
    public static void main(String[] args) {
        System.out.println("Enter Text: ");
        EventSource eventSource = new EventSource();
        
        eventSource.addObserver(event -> System.out.println("Received response: " + event));

        eventSource.scanSystemIn();
    }
}
```

JavaScript có hàm Object.observe không còn được dùng nữa, đây là cách triển khai mẫu quan sát chính xác hơn. Điều này sẽ kích hoạt các sự kiện khi thay đổi đối tượng được quan sát. Nếu không có hàm Object.observe không được dùng nữa, mẫu có thể được triển khai bằng mã rõ ràng hơn:

### Ngôn ngữ JavaScript
``` JavaScript
let Subject = {
    _state: 0,
    _observers: [],
    add: function(observer) {
        this._observers.push(observer);
    },
    getState: function() {
        return this._state;
    },
    setState: function(value) {
        this._state = value;
        for (let i = 0; i < this._observers.length; i++)
        {
            this._observers[i].signal(this);
        }
    }
};

let Observer = {
    signal: function(subject) {
        let currentValue = subject.getState();
        console.log(currentValue);
    }
}

Subject.add(Observer);
Subject.setState(10);
//Output in console.log - 10
```
