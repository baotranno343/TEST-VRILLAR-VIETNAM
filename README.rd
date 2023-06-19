# Triển Khai
    - Sử dụng thư viện Expressjs để triển khai hệ thống.
    - Tổ chức code theo Repository Pattern.
    - Sử dụng thư viện Cheerio để crawl dữ liệu từ website.
    - Sử dụng thư viện Mongoose để lưu và tìm kiếm dữ liệu đã crawl vào collection.
    - Kết hợp với regex để tìm kiếm dữ liệu từ collection.

# API
    - "api/crawling":
        + Crawl dữ liệu từ https://www.formula1.com/en/results.html/2023/races.html và lưu vào Collection, mỗi khi truy cập vào api sẽ xóa dữ liệu cũ và crawl dữ liệu mới
        + return: Boolean

    - "api/filter": 
        + Filter dữ liệu gồm các parrams sau:
            + grand_prix
            + date
            + winner
            + car
            + laps
            + time
        + return: List data
        + Ví dụ: "api/filter?winner=Verstappen&date=2023" -> Trả về kết quả đua năm 2023 của người chiến thắng Max Verstappe

# Khởi chạy project:
    - Thay thế MONGODB_URL trong .env thành URL MongoDb của bạn
    - Chạy lệnh npm Install
    - Chạy npm run dev