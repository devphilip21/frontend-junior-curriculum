import { join } from 'path'
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

runServer();

async function runServer() {
  const compiler = Webpack(createWebpackOption());
  const server = new WebpackDevServer(createWebpackDevServerOption(), compiler);

  await server.start();
}

function createWebpackOption() {
  const __dirname = process.cwd();
  
  return {
    mode: 'development',
    entry: join(__dirname, 'src', 'bootstrap.ts'),
    output: {
      path: join(__dirname, 'build'),
      filename: 'bootstrap.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: join(__dirname, 'tsconfig.json'),
              }
            }
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateContent: createHtmlTemplate(),
      }),
      new Webpack.EnvironmentPlugin({
        SUBJECT: process.env.SUBJECT
      }),
    ],
  }
}

function createWebpackDevServerOption() {
  return {
    open: true,
  }
}

function createHtmlTemplate() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chapter2</title>
  <style>
    * {box-sizing:border-box;margin:0;padding:0;}
    body {background: #252525;}
    .wrap {
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      width:300px;padding:15px 15px;border-radius:12px;background:white;
    }
    .header {
      border-bottom:1px solid #eaeaea;
    }
    .header h1 {
      padding:6px 4px;font-size:18px;
    }
    .main {
      margin-top:12px;padding:12px;border-radius:12px;
      background-color:#f2f2f2;text-align:center;
    }
    .main .desc {
      font-size:15px;line-height:1.5;color:#383838;
    }
    .main .count {
      display:inline-block;margin-right:4px;
      font-weight:bold;font-size:15px;line-height:30px;vertical-align:top;
    }
    .main .color {
      color:red;
    }
    .main .btn {
      display:inline-block;height:30px;margin-left:6px;border-radius:15px;
      border:2px solid #555;padding:0 14px;background:#fff;
      vertical-align:top;cursor:pointer;
    }
    .main .btn.selected {
      background: #555;color:#fff;
    }
    .main .tab-buttons .btn + .btn {
      margin-left:6px;
    }
    .main .tab-buttons.pending .btn {
      border-color: red;
    }
    .main .panel {
      margin-top:12px;
    }
    .main .panel-1 {
      line-height:6px;
    }
    .main .box {
      display:inline-block;width:6px;height:6px;
      background-color:#fff;vertical-align:top;
    }
    .main .box:nth-child(2n) {
      background-color: #111;
    }
  </style>
</head>
<body>
  <div id="app"></div>
</body>
</html>`;
}