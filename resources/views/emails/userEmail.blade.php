<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification for Your Account</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f8f9fa;
            color: #333;
        }

        span {
          font-size: 20px;
          font-weight: 600;
          background: white;
        }

        p,a {
          font-size: 16px;
        }
    </style>
</head>
<body>

    <span>Chào mừng {{ $user->name }} đến với JobIT</span>

    <p>Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi, để kích hoạt tài khoản vui lòng bấm vào nút phía dưới.</p>
    <a href='http://localhost:8080/api/user/verify/{{ $user->email_token }}'>Link kích hoạt</a>

    <p>Nếu có vấn đề gì xin liên lạc với chúng tôi.</p>
</body>
</html>
