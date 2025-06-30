const GAME_CATEGORY = [
  { value: 1, label: "Trả lời câu hỏi", color: "blue" },
  { value: 2, label: "Đuổi hình bắt chữ", color: "green" },
];

const DIFFICULTY = [
  { value: "easy", label: "Dễ", color: "green" },
  { value: "medium", label: "Trung bình", color: "gold" },
  { value: "hard", label: "Khó", color: "red" },
];

const MAIL_SUBJECT = "SHBET XÁC NHẬN ĐỊA CHỈ ĐƠN HÀNG TRI ÂN";
const MAIL_CONTENT = `<p>Kính gửi quý hội viên [[account]]</p>
<br/>
<p>Hệ thống SHBET nhận được thông tin đăng ký nhận quà tặng tri ân của quý hội viên qua địa chỉ sau:[<strong> [[address]] </strong>]</p>
<br/>
<p>Nếu thông tin địa chỉ chính xác, vui lòng trả lời "Xác nhận"</p>
<br/>
<p>Nếu thông tin chưa chính xác, vui lòng liên hệ lại kênh Telegram Quà Tặng để được hỗ trợ kiểm tra.</p>
<br/>
<p>Đội ngũ SHBET xin cảm ơn!</p>`;

export { GAME_CATEGORY, DIFFICULTY, MAIL_SUBJECT, MAIL_CONTENT };
