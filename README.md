# 上海名表维修服务中心

一个使用 Next.js App Router 构建的高端钟表服务中心单页官网，包含：

- React / Next.js 页面结构
- 多语言切换：简体中文、繁体中文、English
- 在线预约表单
- 通过 SMTP 发信的真实后端预约接口
- 高德地图 JS API 集成

## 本地启动

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量：

```bash
cp .env.example .env.local
```

3. 补全 `.env.local`：

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `BOOKING_TO`
- `NEXT_PUBLIC_AMAP_KEY`
- `NEXT_PUBLIC_AMAP_SECURITY_CODE`

4. 启动开发环境：

```bash
npm run dev
```

5. 打开 `http://localhost:3000`

## 预约接口

前端会向 `POST /api/book` 提交预约请求。服务端会：

- 做字段校验
- 生成纯文本和 HTML 邮件
- 通过 SMTP 发送到 `BOOKING_TO`

## 地图

地图使用高德 JS API。若未配置高德 Key，页面会显示可理解的设置提示和外部导航按钮。

