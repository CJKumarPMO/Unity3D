import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
  const { service } = req.query;

  const target = {
    users: 'http://localhost:3001',
    courses: 'http://localhost:3002',
    enrollments: 'http://localhost:3003',
  }[service];

  if (!target) {
    res.status(404).json({ error: 'Unknown service' });
    return;
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/proxy': '',
    },
  })(req, res);
}
