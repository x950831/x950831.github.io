# 晨露咖啡 Morning Dew Cafe — 個人網站

單頁式咖啡師個人網站，純 HTML / CSS / JavaScript，無需建置流程，可直接部署到 GitHub Pages。

- 品牌：晨露咖啡（Morning Dew Cafe）
- GitHub：`x950831`
- 正式網址：**https://x950831.github.io**

## 檔案結構

```
personal-site/
├── index.html          # 頁面內容（要改文字主要改這裡）
├── css/style.css       # 樣式與配色（咖啡棕 × 米白）
├── js/main.js          # 深色模式、手機選單、進場動畫
├── assets/favicon.svg  # 網站圖示
├── .nojekyll           # 讓 GitHub Pages 不要用 Jekyll 處理
└── README.md
```

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。
若要更接近正式環境，可啟動一個本機伺服器：

```bash
cd personal-site
python3 -m http.server 8000
# 然後開 http://localhost:8000
```

## 要換成自己的內容

在 `index.html` 搜尋並替換：

| 搜尋 | 換成 |
|---|---|
| `you@example.com` | 你的 Email（尚未提供，目前是佔位） |
| `href="#"`（社群連結） | 你的 Instagram / Threads 網址（尚未提供） |
| 作品卡片 | 你的作品與連結 |
| `assets/favicon.svg` | 想換成自己的圖示可替換這個檔案 |

配色集中在 `css/style.css` 最上方的 `:root` 變數，改 `--accent` 就能換主色。

## 部署到 GitHub Pages（網頁手動上傳版）

個人網站的網址格式是 `https://<你的帳號>.github.io`，**repository 名稱必須是 `<你的帳號>.github.io`**。本專案就是 `x950831.github.io`。

### 1. 建立 repository

1. 打開 https://github.com/new
2. **Repository name** 填入：`x950831.github.io`
3. 選 **Public**
4. 不要勾選 Add a README / .gitignore / license
5. 按 **Create repository**

### 2. 上傳檔案

在空 repo 頁面點 **uploading an existing file**（或 Add file → Upload files）。

把 `personal-site` 資料夾**裡面的東西**拖進去：

```
index.html
css/
js/
assets/
.nojekyll
README.md
```

⚠️ 注意：要上傳的是 `personal-site` 底下的**內容**，不是整個 `personal-site` 資料夾，
否則網址會變成 `x950831.github.io/personal-site/`。

隱藏檔 `.nojekyll` 用拖曳可能不會被選到，可以略過（本站沒有需要它的檔案）。
或之後用 Add file → Create new file，檔名輸入 `.nojekyll`、內容留空。

最後按 **Commit changes**。

### 3. 開啟 GitHub Pages

到 repo → **Settings → Pages**：

- **Source** 選 `Deploy from a branch`
- **Branch** 選 `main`、資料夾選 `/ (root)`
- 按 **Save**

等 1～2 分鐘，打開 **https://x950831.github.io** 就會看到網站。

### 之後更新內容

在同一個 repo 點 **Add file → Upload files** 上傳修改後的檔案並 commit，
GitHub Pages 會自動重新部署。

若之後安裝了 git 與 gh，也可以直接執行 `./deploy.sh` 自動完成以上步驟。

## 檢查清單

- [x] 品牌名稱：晨露咖啡 Morning Dew Cafe
- [x] 年資：3 年
- [x] 網站網址：https://x950831.github.io
- [x] 換掉 `you@example.com` → X950831@gmail.com
- [ ] 換掉社群連結 `href="#"`
- [ ] 更新作品卡片內容
- [ ] 手機上看一次
