# osint_fptu2025
BÁO CÁO ĐỀ BÀI OSINT
1. Mục tiêu thử thách
Thiết kế một thử thách OSINT (Open Source Intelligence) ngắn, yêu cầu người chơi vận dụng kỹ năng tìm kiếm và phân tích thông tin từ nguồn mở để lần theo chuỗi manh mối kỹ thuật số.
Đích đến cuối cùng là truy cập được fanpage chính thức của sự kiện TechFest 2025 – Đại học FPT Hà Nội, nơi chứa mật mã quyết định.
2. Mô tả đề bài
Người chơi nhận được một bức ảnh do BTC gửi cho, bức ảnh trông như không có gì đặc biệt nhưng lại được chèn QR code ở đó, 
IMAGE:

3. Lộ trình giải đề chi tiết
 Bước 1: Phát hiện QR chứa trong ảnh:
Người chơi phát hiện QR trong ảnh bị khác thường, người chơi cần zoom ảnh để thấy rõ QR hơn. Sau đó, cap màn hình QR đã zoom lại, và cho ảnh vừa cap lại vào một số app quét QR như:
+ zalo
+ các app ngân hàng
Bước 2: Tìm và giải mã base64:
QR CODE sẽ dẫn người chơi đến một website Github, mã base64 sẽ được giấu ở trong web đó, ở dòng:
0x0077  Backup_Key: VGVjaEZlc3QyMDI1
Người chơi cần phải biết đó là một đoạn mã base64 bất thường, mà giải mã đó ra. Người chơi lên trình duyệt có sẵn trong điện thoại gõ:
Decode base 64 [dán mã base64]
Kết quả thu được sẽ là TECH-FEST 2025.
Người chơi phải tự tìm đường dẫn đến link FB của sự kiện
Facebook
Bước 3: Truy cập fanpage – tìm mật mã
Người chơi truy cập vào link → fanpage chính thức của sự kiện TechFest 2025 – Đại học FPT Hà Nội.
Tại đó, có thể có một bài đăng cụ thể (đăng từ trước), hoặc một bức ảnh, chứa mật mã tiếp theo như:
•	Một mã Morse ngắn.(được gắn ở 1 bài viết nào đó của page)- Nhờ admin page chèn hộ 1 đoạn mã Morse.
•	Cuối cùng, người chơi sẽ giải mã Morse đó để tìm ra KEY.

Bước 4: Nhập KEY vào web của BTC.
Người chơi nhập KEY vào web được tạo sẵn bởi BTC:
+đúng: Chúc mừng bạn đã xuất sắc vượt qua thử thách ….
+sai: bị dí điện
Dành cho Admin:
Trò chơi OSINT - Admin Panel
Dành cho người chơi:
Trò chơi OSINT - Nhập Đáp án

Admin user: admin
Password: your_admin_password
