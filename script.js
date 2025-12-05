// --- CONTENT DATA ---
const week1Slides = [
    {
        title: "課程總覽：銀河保衛者",
        content: `
            <p>歡迎來到 Micro:bit 遊戲設計課程！</p>
            <p>在這個課程中，我們將從零開始，學習軟硬體整合，最後完成一個體感射擊遊戲。</p>
            <div class="step-box">
                <h3>🎮 專題目標</h3>
                <p>製作 <strong>Galaxy Defender</strong>：利用傾斜控制飛船，發射雷射擊落隕石！</p>
            </div>
        `
    },
    {
        title: "認識 Micro:bit (1/3)",
        content: `
            <p>Micro:bit 是一塊由英國 BBC 設計的微型電腦，專門用來學習程式設計。</p>
            <p>它雖然只有信用卡大小，但上面滿滿的都是高科技零件喔！</p>
            <div style="text-align: center; margin: 10px 0;">
                <img src="images/microbit-front.png" alt="Micro:bit Front" style="max-width: 80%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
            </div>
            <div class="step-box">
                <h3>正面元件</h3>
                <ul>
                    <li><strong>LED 矩陣</strong>：5x5 共 25 顆紅燈，是我們的螢幕。</li>
                    <li><strong>按鈕 A & B</strong>：這是我們的遊戲手把按鍵。</li>
                    <li><strong>觸控 Logo (V2)</strong>：金色的 Logo 摸下去也有反應喔！</li>
                </ul>
            </div>
        `
    },
    {
        title: "認識 Micro:bit (2/3)",
        content: `
            <p>翻到背面，這裡有更多厲害的感測器。</p>
            <div style="text-align: center; margin: 10px 0;">
                <img src="images/microbit-back.png" alt="Micro:bit Back" style="max-width: 80%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
            </div>
            <div class="step-box">
                <h3>背面元件</h3>
                <ul>
                    <li><strong>處理器 (CPU)</strong>：電腦的大腦，負責執行你的程式。</li>
                    <li><strong>藍牙天線</strong>：讓它可以跟手機或電腦無線連線。</li>
                    <li><strong>重置按鈕 (Reset)</strong>：按一下可以重新開始程式。</li>
                    <li><strong>電池插座</strong>：接上電池盒，就可以帶著走！</li>
                </ul>
            </div>
        `
    },
    {
        title: "認識 Micro:bit (3/3)",
        content: `
            <p>還有一些你看不到，但感覺得到的感測器：</p>
            <div style="text-align: center; margin: 10px 0;">
                <img src="images/microbit-sensors.png" alt="Micro:bit Sensors" style="max-width: 80%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
            </div>
            <div class="step-box">
                <h3>隱藏的感測器</h3>
                <ul>
                    <li><strong>加速度計 (Accelerometer)</strong>：偵測動作、搖晃、傾斜 (像手機轉橫螢幕一樣)。</li>
                    <li><strong>電子羅盤 (Compass)</strong>：知道東南西北。</li>
                    <li><strong>溫度感測器</strong>：測量晶片的溫度。</li>
                    <li><strong>光感測器</strong>：利用 LED 燈來偵測亮度。</li>
                </ul>
            </div>
        `
    },
    {
        title: "開發環境：MakeCode",
        content: `
            <p>我們不需要寫複雜的英文程式碼，只要像堆積木一樣就可以了！</p>
            <div class="step-box">
                <h3>MakeCode 介面介紹</h3>
                <ol>
                    <li><strong>模擬器 (左/上)</strong>：即時預覽程式執行結果。</li>
                    <li><strong>積木區 (中)</strong>：各種顏色的分類積木。</li>
                    <li><strong>工作區 (右)</strong>：把積木拖到這裡組合。</li>
                </ol>
            </div>
        `
    },
    {
        title: "第一支程式：心跳 (1/2)",
        content: `
            <p>讓我們讓 Micro:bit 活過來吧！</p>
            <div class="step-box">
                <h3>步驟 1</h3>
                <ol>
                    <li>打開 <span class="block b-basic">基本</span> 積木盒。</li>
                    <li>找到 <span class="block b-basic">顯示圖示</span>。</li>
                    <li>把它拖進 <span class="block b-basic">當啟動時</span> 裡面。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示圖示 ♥</span></div>
            </div>
        `
    },
    {
        title: "第一支程式：心跳 (2/2)",
        content: `
            <p>現在讓它一直跳動。</p>
            <div class="step-box">
                <h3>步驟 2</h3>
                <ol>
                    <li>把 <span class="block b-basic">顯示圖示</span> 移到 <span class="block b-basic">重複無限次</span> 裡面。</li>
                    <li>再拉一個 <span class="block b-basic">顯示圖示</span> 放在下面，選一個「小愛心」。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示圖示 ♥ (大)</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示圖示 . (小)</span></div>
            </div>
        `
    },
    {
        title: "深入了解：LED 矩陣",
        content: `
            <p>Micro:bit 的螢幕是由 25 個 LED 組成的。</p>
            <p>如果我們想畫出自己想要的圖案，可以使用 <span class="block b-basic">顯示 LED</span>。</p>
            <div class="step-box">
                <h3>練習</h3>
                <p>試著用 <span class="block b-basic">顯示 LED</span> 畫出你名字的第一個字母。</p>
            </div>
        `
    },
    {
        title: "座標系統：X 與 Y (1/4)",
        content: `
            <p>如果你想精準控制「某一顆」燈，就需要懂 <strong>座標</strong>。</p>
            <p>想像這是一個 5x5 的棋盤。</p>
            <ul>
                <li><strong>X (橫軸)</strong>：代表左右位置。</li>
                <li><strong>Y (縱軸)</strong>：代表上下位置。</li>
            </ul>
        `
    },
    {
        title: "座標系統：X 軸 (2/4)",
        content: `
            <p><strong>X</strong> 是從 <strong>左</strong> 算到 <strong>右</strong>。</p>
            <div class="step-box">
                <h3>X 的範圍：0 到 4</h3>
                <ul>
                    <li>最左邊是 X = 0</li>
                    <li>中間是 X = 2</li>
                    <li>最右邊是 X = 4</li>
                </ul>
            </div>
            <p>注意：電腦是從 0 開始數，不是 1 喔！</p>
        `
    },
    {
        title: "座標系統：Y 軸 (3/4)",
        content: `
            <p><strong>Y</strong> 是從 <strong>上</strong> 算到 <strong>下</strong>。</p>
            <div class="step-box">
                <h3>Y 的範圍：0 到 4</h3>
                <ul>
                    <li>最上面是 Y = 0</li>
                    <li>中間是 Y = 2</li>
                    <li>最下面是 Y = 4</li>
                </ul>
            </div>
        `
    },
    {
        title: "座標系統：練習 (4/4)",
        content: `
            <p>考考你！</p>
            <div class="step-box">
                <h3>座標大挑戰</h3>
                <ul>
                    <li>左上角的座標是？ (0, 0)</li>
                    <li>右下角的座標是？ (4, 4)</li>
                    <li>正中間的座標是？ (2, 2)</li>
                </ul>
            </div>
            <p>讓我們用程式來驗證看看。</p>
        `
    },
    {
        title: "控制單顆 LED (1/2)",
        content: `
            <p>我們使用 <span class="block b-led">LED</span> 積木盒裡的指令。</p>
            <div class="step-box">
                <h3>指令介紹</h3>
                <ul>
                    <li><span class="block b-led">繪製 x 0 y 0</span>：點亮某個座標的燈。</li>
                    <li><span class="block b-led">取消繪製 x 0 y 0</span>：關掉某個座標的燈。</li>
                    <li><span class="block b-led">切換 x 0 y 0</span>：如果是亮的就關，關的就亮。</li>
                </ul>
            </div>
        `
    },
    {
        title: "控制單顆 LED (2/2)",
        content: `
            <p>來做個實驗。</p>
            <div class="step-box">
                <h3>實作</h3>
                <ol>
                    <li>在 <span class="block b-basic">當啟動時</span> 放入 <span class="block b-led">繪製 x 0 y 0</span>。</li>
                    <li>放入 <span class="block b-led">繪製 x 4 y 4</span>。</li>
                    <li>放入 <span class="block b-led">繪製 x 2 y 2</span>。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                <div class="block-row indent"><span class="block b-led">繪製 x 0 y 0</span></div>
                <div class="block-row indent"><span class="block b-led">繪製 x 4 y 4</span></div>
                <div class="block-row indent"><span class="block b-led">繪製 x 2 y 2</span></div>
            </div>
        `
    },
    {
        title: "動畫原理：視覺暫留",
        content: `
            <p>動畫其實就是快速播放一連串靜止的圖片。</p>
            <p>Micro:bit 執行速度很快，如果我們不叫它「暫停」，燈光變化會快到看不見。</p>
            <div class="step-box">
                <h3>重要積木：暫停 (Pause)</h3>
                <p>單位是 <strong>毫秒 (ms)</strong>。</p>
                <ul>
                    <li>1000 ms = 1 秒</li>
                    <li>500 ms = 0.5 秒</li>
                    <li>100 ms = 0.1 秒 (很快！)</li>
                </ul>
            </div>
        `
    },
    {
        title: "專題實作：流星燈 (1/3)",
        content: `
            <p>我們來做一個光點從左跑到右的動畫。</p>
            <div class="step-box">
                <h3>步驟 1：第一顆燈</h3>
                <ol>
                    <li>在 <span class="block b-basic">重複無限次</span> 裡：</li>
                    <li><span class="block b-led">繪製 x 0 y 2</span> (亮)</li>
                    <li><span class="block b-basic">暫停 200 ms</span></li>
                    <li><span class="block b-led">取消繪製 x 0 y 2</span> (滅)</li>
                </ol>
            </div>
        `
    },
    {
        title: "專題實作：流星燈 (2/3)",
        content: `
            <p>接著讓它往右跑。</p>
            <div class="step-box">
                <h3>步驟 2：接力賽</h3>
                <p>複製剛剛的積木，但把 X 改成 1：</p>
                <div class="block-container">
                    <div class="block-row"><span class="block b-led">繪製 x 1 y 2</span></div>
                    <div class="block-row"><span class="block b-basic">暫停 200 ms</span></div>
                    <div class="block-row"><span class="block b-led">取消繪製 x 1 y 2</span></div>
                </div>
            </div>
            <p>現在燈會從 0 跳到 1 了！</p>
        `
    },
    {
        title: "專題實作：流星燈 (3/3)",
        content: `
            <p>把 X 從 0 到 4 都做一遍！</p>
            <div class="step-box">
                <h3>完成流星</h3>
                <p>你的程式應該會有 5 組 亮->暫停->滅 的積木，X 分別是 0, 1, 2, 3, 4。</p>
            </div>
            <p><strong>挑戰：</strong> 能不能讓它跑到底後，再從右邊跑回來？</p>
        `
    },
    {
        title: "進階挑戰：迴圈 (Loops)",
        content: `
            <p>寫 5 次一樣的程式太累了，工程師都很懶惰的！</p>
            <p>我們可以使用 <span class="block b-loops">迴圈 (Loops)</span> 來簡化。</p>
            <div class="step-box">
                <h3>使用 For 迴圈</h3>
                <ol>
                    <li>打開 <span class="block b-loops">迴圈</span> 積木盒。</li>
                    <li>拖出 <span class="block b-loops">for index from 0 to 4</span>。</li>
                    <li>把 <span class="block b-led">繪製 x index y 2</span> 放進去。</li>
                    <li>別忘了 <code>暫停</code> 和 <code>取消繪製</code>！</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-loops">for index from 0 to 4</span></div>
                <div class="block-row indent"><span class="block b-led">繪製 x <span class="block b-vars">index</span> y 2</span></div>
                <div class="block-row indent"><span class="block b-basic">暫停 200 ms</span></div>
                <div class="block-row indent"><span class="block b-led">取消繪製 x <span class="block b-vars">index</span> y 2</span></div>
            </div>
        `
    },
    {
        title: "第一週總結",
        content: `
            <p>恭喜你完成了第一週的訓練！ 🎉</p>
            <div class="step-box">
                <h3>我們學會了：</h3>
                <ul>
                    <li>Micro:bit 的硬體構造。</li>
                    <li>如何使用 MakeCode。</li>
                    <li>LED 矩陣與座標 (X, Y)。</li>
                    <li>動畫原理與暫停。</li>
                    <li>(進階) 迴圈的概念。</li>
                </ul>
            </div>
            <p>下週我們將學習如何使用按鈕來控制遊戲！</p>
        `
    }
];

const week2Slides = [
    {
        title: "第二週：輸入與互動",
        content: `
            <p>歡迎回來！上週我們學會了如何控制顯示 (輸出)。</p>
            <p>今天我們要學習如何讓 Micro:bit 聽你的話 (輸入)。</p>
            <div class="step-box">
                <h3>本週目標</h3>
                <ul>
                    <li>按鈕 A 與 B 的使用。</li>
                    <li>什麼是變數 (Variables)？</li>
                    <li>製作一個計數器 (Clicker)。</li>
                </ul>
            </div>
        `
    },
    {
        title: "認識按鈕 (Buttons)",
        content: `
            <p>Micro:bit 正面有兩個按鈕：<strong>A</strong> (左邊) 和 <strong>B</strong> (右邊)。</p>
            <p>它們就像遊戲手把上的按鍵，可以觸發事件。</p>
            <div class="step-box">
                <h3>事件 (Events)</h3>
                <p>當某件事發生時，執行某段程式。</p>
                <p>例如：「當按鈕 A 被按下時，顯示笑臉」。</p>
            </div>
        `
    },
    {
        title: "實作：按鈕測試 (1/3)",
        content: `
            <p>讓我們來測試按鈕有沒有壞掉。</p>
            <div class="step-box">
                <h3>任務 1：A 鍵測試</h3>
                <ol>
                    <li>打開 <span class="block b-input">輸入 (Input)</span> 積木盒。</li>
                    <li>拖出 <span class="block b-input">當按鈕 A 被按下</span>。</li>
                    <li>在裡面放入 <span class="block b-basic">顯示字串 "A"</span>。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-input">當按鈕 A 被按下</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示字串 "A"</span></div>
            </div>
        `
    },
    {
        title: "實作：按鈕測試 (2/3)",
        content: `
            <p>接著設定 B 鍵。</p>
            <div class="step-box">
                <h3>任務 2：B 鍵測試</h3>
                <ol>
                    <li>再拖出一個 <span class="block b-input">當按鈕 A 被按下</span>。</li>
                    <li>把選單裡的 A 改成 <strong>B</strong>。</li>
                    <li>在裡面放入 <span class="block b-basic">顯示字串 "B"</span>。</li>
                </ol>
            </div>
        `
    },
    {
        title: "實作：按鈕測試 (3/3)",
        content: `
            <p>還有一個隱藏功能喔！</p>
            <div class="step-box">
                <h3>任務 3：A+B 同時按</h3>
                <ol>
                    <li>再拖出一個 <span class="block b-input">當按鈕 A 被按下</span>。</li>
                    <li>把選單改成 <strong>A+B</strong>。</li>
                    <li>在裡面放入 <span class="block b-basic">顯示圖示 (鬼臉)</span>。</li>
                </ol>
            </div>
        `
    },
    {
        title: "什麼是變數 (Variables)？ (1/2)",
        content: `
            <p>想像你有一個空盒子。</p>
            <ul>
                <li>你可以給盒子貼標籤 (命名)。</li>
                <li>你可以把數字放進去 (賦值)。</li>
                <li>你可以把原本的數字拿掉，換新的進去 (改變數值)。</li>
                <li>你可以隨時看盒子裡裝什麼 (讀取數值)。</li>
            </ul>
            <p>這個盒子，在程式裡就叫做 <strong>變數</strong>。</p>
        `
    },
    {
        title: "什麼是變數？ (2/2)",
        content: `
            <p>為什麼需要變數？</p>
            <div class="step-box">
                <h3>用途範例</h3>
                <ul>
                    <li><strong>遊戲分數</strong>：從 0 開始，每次得分就 +1。</li>
                    <li><strong>生命值</strong>：從 3 開始，受傷就 -1。</li>
                    <li><strong>子彈數量</strong>：射擊時減少。</li>
                </ul>
            </div>
            <p>沒有變數，電腦就記不住現在幾分了！</p>
        `
    },
    {
        title: "建立變數",
        content: `
            <p>我們來做一個計數器。</p>
            <div class="step-box">
                <h3>步驟 1：宣告變數</h3>
                <ol>
                    <li>打開 <span class="block b-vars">變數</span> 積木盒。</li>
                    <li>點擊 <strong>建立一個變數</strong>。</li>
                    <li>輸入名字：<code>Score</code> (或是「分數」)。</li>
                </ol>
            </div>
            <p>你會看到出現了 <span class="block b-vars">變數 Score</span>、<span class="block b-vars">設為</span>、<span class="block b-vars">改變</span> 等積木。</p>
        `
    },
    {
        title: "初始化 (Initialization)",
        content: `
            <p>遊戲開始時，分數應該是多少？</p>
            <div class="step-box">
                <h3>步驟 2：歸零</h3>
                <ol>
                    <li>在 <span class="block b-basic">當啟動時</span> 裡面。</li>
                    <li>放入 <span class="block b-vars">變數 Score 設為 0</span>。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                <div class="block-row indent"><span class="block b-vars">變數 Score 設為 0</span></div>
            </div>
        `
    },
    {
        title: "改變數值",
        content: `
            <p>我們希望按 A 鍵的時候加分。</p>
            <div class="step-box">
                <h3>步驟 3：加分</h3>
                <ol>
                    <li>在 <span class="block b-input">當按鈕 A 被按下</span> 裡面。</li>
                    <li>放入 <span class="block b-vars">變數 Score 改變 1</span>。</li>
                </ol>
            </div>
        `
    },
    {
        title: "顯示數值",
        content: `
            <p>可是現在按 A 沒反應？因為我們沒有叫它「顯示」出來。</p>
            <div class="step-box">
                <h3>步驟 4：顯示分數</h3>
                <p>我們有兩種做法：</p>
                <ol>
                    <li>加分後立刻顯示。</li>
                    <li>或者，按 B 鍵的時候才顯示。</li>
                </ol>
                <p>讓我們試試看第 2 種：在 <span class="block b-input">當按鈕 B 被按下</span> 放入 <span class="block b-basic">顯示數字</span> 並嵌入 <span class="block b-vars">Score</span>。</p>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-input">當按鈕 B 被按下</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示數字 <span class="block b-vars">Score</span></span></div>
            </div>
        `
    },
    {
        title: "測試計數器",
        content: `
            <p>現在試玩看看：</p>
            <ol>
                <li>按 5 次 A (心裡默數)。</li>
                <li>按 1 次 B。</li>
                <li>螢幕顯示 5 嗎？如果是，恭喜你成功了！</li>
            </ol>
        `
    },
    {
        title: "扣分機制",
        content: `
            <p>如果不小心按錯了怎麼辦？</p>
            <div class="step-box">
                <h3>挑戰：A+B 扣分</h3>
                <ol>
                    <li>在 <span class="block b-input">當按鈕 A+B 被按下</span> 裡面。</li>
                    <li>放入 <span class="block b-vars">變數 Score 改變 -1</span>。</li>
                </ol>
            </div>
        `
    },
    {
        title: "邏輯判斷 (Logic) (1/3)",
        content: `
            <p>電腦最厲害的地方就是會「判斷」。</p>
            <p>如果...就... (If... Then...)</p>
            <div class="step-box">
                <h3>生活例子</h3>
                <ul>
                    <li><strong>如果</strong> 下雨，<strong>就</strong> 帶傘。</li>
                    <li><strong>如果</strong> 肚子餓，<strong>就</strong> 吃飯。</li>
                    <li><strong>如果</strong> 分數 = 10，<strong>就</strong> 贏了。</li>
                </ul>
            </div>
        `
    },
    {
        title: "邏輯判斷 (2/3)",
        content: `
            <p>我們來設定一個勝利目標：10 分。</p>
            <div class="step-box">
                <h3>步驟 5：加入判斷</h3>
                <ol>
                    <li>回到 <span class="block b-input">當按鈕 A 被按下</span> (加分的地方)。</li>
                    <li>加分之後，放入 <span class="block b-logic">如果 <真> 那麼</span> (在邏輯積木盒)。</li>
                </ol>
            </div>
        `
    },
    {
        title: "邏輯判斷 (3/3)",
        content: `
            <p>設定條件。</p>
            <div class="step-box">
                <h3>步驟 6：比較數字</h3>
                <ol>
                    <li>在邏輯積木盒找到 <span class="block b-logic">0 = 0</span> 的比較積木。</li>
                    <li>把它放進 <code>如果</code> 的缺口。</li>
                    <li>左邊放 <span class="block b-vars">Score</span>，右邊打 <code>10</code>。</li>
                    <li>在 <code>那麼</code> 裡面，放入 <span class="block b-basic">顯示字串 "WIN"</span>。</li>
                </ol>
            </div>
            <div class="block-container">
                <div class="block-row"><span class="block b-input">當按鈕 A 被按下</span></div>
                <div class="block-row indent"><span class="block b-vars">變數 Score 改變 1</span></div>
                <div class="block-row indent"><span class="block b-logic">如果 <span class="block b-vars">Score</span> = 10 那麼</span></div>
                <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示字串 "WIN"</span></div>
            </div>
        `
    },
    {
        title: "完整程式碼檢查",
        content: `
            <p>你的程式應該長這樣：</p>
            <ul>
                <li><strong>啟動時</strong>：Score = 0</li>
                <li><strong>按鈕 A</strong>：Score + 1，如果 Score = 10 顯示 WIN。</li>
                <li><strong>按鈕 B</strong>：顯示 Score。</li>
                <li><strong>按鈕 A+B</strong>：Score - 1。</li>
            </ul>
        `
    },
    {
        title: "進階挑戰：重置遊戲",
        content: `
            <p>贏了之後，想重玩怎麼辦？</p>
            <div class="step-box">
                <h3>挑戰：搖晃歸零</h3>
                <ol>
                    <li>打開 <span class="block b-input">輸入</span>，找到 <span class="block b-input">當被搖晃</span>。</li>
                    <li>在裡面放入 <span class="block b-vars">變數 Score 設為 0</span>。</li>
                    <li>放入 <span class="block b-basic">顯示圖示 (打勾)</span> 表示重置成功。</li>
                </ol>
            </div>
            <p>現在用力搖晃 Micro:bit 看看！(模擬器上有個 Shake 按鈕)</p>
        `
    },
    {
        title: "課堂挑戰",
        content: `
            <p>發揮你的創意，修改這個計數器。</p>
            <div class="step-box">
                <h3>創意點子</h3>
                <ul>
                    <li>做成「投票機」：A 是喜歡，B 是不喜歡，顯示哪邊票數多。</li>
                    <li>做成「計步器」：利用 <code>當被搖晃</code> 來加分，綁在腳上跑步！</li>
                </ul>
            </div>
        `
    },
    {
        title: "第二週總結",
        content: `
            <p>這週我們學到了程式設計最重要的概念之一：<strong>變數</strong>。</p>
            <div class="step-box">
                <h3>重點回顧</h3>
                <ul>
                    <li>按鈕事件 (A, B, A+B)。</li>
                    <li>變數的建立、讀取、修改。</li>
                    <li>邏輯判斷 (If Score = 10)。</li>
                    <li>搖晃感測器初體驗。</li>
                </ul>
            </div>
            <p>下週我們要深入研究感測器，用「傾斜」來控制燈光移動！</p>
        `
    }
];




// Combine all slides with metadata for navigation
// Combine all slides with metadata for navigation
const weeks = [
    { name: "第 1 週：LED 與動畫", slides: week1Slides },
    { name: "第 2 週：輸入與變數", slides: week2Slides },
    {
        name: "第 3 週：感測器與邏輯", slides: [
            {
                title: "第三週：感測器與邏輯",
                content: `
                <p>歡迎來到第三週！這週我們要讓 Micro:bit 變得更聰明。</p>
                <p>人類有五感 (視、聽、嗅、味、觸)，Micro:bit 也有它的感官，我們稱為 **感測器 (Sensors)**。</p>
                <div class="step-box">
                    <h3>本週目標</h3>
                    <ul>
                        <li>認識環境感測器：光線、溫度。</li>
                        <li>認識動作感測器：加速度計、指南針。</li>
                        <li>學習邏輯判斷：<code>if / else if / else</code>。</li>
                        <li>製作「電子水平儀」與「光控小夜燈」。</li>
                    </ul>
                </div>
            `
            },
            {
                title: "什麼是感測器？",
                content: `
                <p>感測器是用來偵測外界環境變化的元件。</p>
                <div class="step-box">
                    <h3>Micro:bit 的感測器家族</h3>
                    <ul>
                        <li><strong>溫度感測器</strong>：現在熱不熱？</li>
                        <li><strong>光感測器</strong>：現在亮不亮？</li>
                        <li><strong>加速度計</strong>：我有沒有動？有沒有歪掉？</li>
                        <li><strong>電子羅盤</strong>：北方在哪裡？</li>
                    </ul>
                </div>
                <p>這些感測器會給我們一個 **數值 (Number)**，我們可以根據這個數值來寫程式。</p>
            `
            },
            {
                title: "光感測器 (Light Level) (1/3)",
                content: `
                <p>Micro:bit 沒有專門的光敏電阻，它是利用 LED 矩陣來感測光線的！(很神奇吧)</p>
                <div class="step-box">
                    <h3>數值範圍</h3>
                    <p><strong>0 (全黑) ~ 255 (最亮)</strong></p>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-input">亮度</span> (這是一個圓形積木，代表數值)</div>
                </div>
                <p>試著調整右下角的「光線」滑桿，看看數值變化。</p>
            `
            },
            {
                title: "光感測器：實作 (2/3)",
                content: `
                <p>我們來做一個簡單的測試：顯示目前的亮度。</p>
                <div class="step-box">
                    <h3>任務 1：顯示亮度</h3>
                    <ol>
                        <li>在 <span class="block b-basic">重複無限次</span> 裡。</li>
                        <li>放入 <span class="block b-basic">顯示數字</span>。</li>
                        <li>把 <span class="block b-input">亮度</span> 放入顯示數字的框框中。</li>
                    </ol>
                </div>
                <p>現在，試著拉動模擬器的光線滑桿，看看螢幕上的數字會不會變！</p>
            `
            },
            {
                title: "光感測器：小夜燈 (3/3)",
                content: `
                <p>讓我們做一個聰明的燈：<strong>天黑了自動亮燈</strong>。</p>
                <div class="step-box">
                    <h3>邏輯思考</h3>
                    <p>如果 (亮度 < 50) 那麼 (開燈) 否則 (關燈)</p>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-logic">如果 <span class="block b-input">亮度</span> < 50 那麼</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示圖示 (月亮/燈泡)</span></div>
                    <div class="block-row"><span class="block b-logic">否則</span></div>
                    <div class="block-row indent"><span class="block b-basic">清除螢幕</span></div>
                </div>
            `
            },
            {
                title: "溫度感測器 (Temperature)",
                content: `
                <p>這個感測器其實是測量 CPU 的溫度，但通常跟室溫差不多。</p>
                <div class="step-box">
                    <h3>單位：攝氏 (°C)</h3>
                    <p>跟光線一樣，我們可以用 <span class="block b-input">溫度 (°C)</span> 積木取得數值。</p>
                </div>
                <p><strong>挑戰：</strong> 做一個溫度計，按 A 鍵顯示目前溫度。</p>
            `
            },
            {
                title: "加速度計 (Accelerometer) (1/4)",
                content: `
                <p>這是做體感遊戲最重要的感測器！它可以偵測 Micro:bit 的動作。</p>
                <div class="step-box">
                    <h3>它可以偵測什麼？</h3>
                    <ul>
                        <li><strong>搖晃 (Shake)</strong>：計步器、骰子。</li>
                        <li><strong>傾斜 (Tilt)</strong>：控制飛機、賽車。</li>
                        <li><strong>墜落 (Free fall)</strong>：自由落體實驗。</li>
                    </ul>
                </div>
            `
            },
            {
                title: "加速度計：X 與 Y (2/4)",
                content: `
                <p>傾斜有分方向，我們用 X 和 Y 來表示 (跟座標很像)。</p>
                <div class="step-box">
                    <h3>傾斜方向</h3>
                    <ul>
                        <li><strong>X 軸 (左右)</strong>：向右傾斜 X > 0，向左傾斜 X < 0。</li>
                        <li><strong>Y 軸 (前後)</strong>：向後傾斜 Y > 0，向前傾斜 Y < 0。</li>
                    </ul>
                    <p>數值範圍大約是 -1023 到 1023。</p>
                </div>
                <p>試著玩玩看右下角的 Tilt X 和 Tilt Y 滑桿。</p>
            `
            },
            {
                title: "加速度計：實作 (3/4)",
                content: `
                <p>我們來做一個「平衡球」遊戲。</p>
                <div class="step-box">
                    <h3>任務 2：偵測向右傾斜</h3>
                    <p>如果 X > 200，表示向右歪了，顯示向右的箭頭。</p>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-logic">如果 <span class="block b-input">加速度 X</span> > 200 那麼</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示圖示 (→)</span></div>
                </div>
            `
            },
            {
                title: "加速度計：多重判斷 (4/4)",
                content: `
                <p>如果向左歪呢？我們需要 <code>else if</code> (否則如果)。</p>
                <div class="step-box">
                    <h3>完整邏輯</h3>
                    <ol>
                        <li>如果 X > 200：顯示 →</li>
                        <li><strong>否則如果</strong> X < -200：顯示 ←</li>
                        <li><strong>否則</strong> (平平的)：顯示 ●</li>
                    </ol>
                </div>
                <p>這就是電子水平儀的基本原理喔！</p>
            `
            },
            {
                title: "電子羅盤 (Compass) (1/2)",
                content: `
                <p>Micro:bit 內建磁力計，可以當指南針用。</p>
                <div class="step-box">
                    <h3>方位角 (0° ~ 359°)</h3>
                    <ul>
                        <li>0°：北方 (N)</li>
                        <li>90°：東方 (E)</li>
                        <li>180°：南方 (S)</li>
                        <li>270°：西方 (W)</li>
                    </ul>
                </div>
                <p>注意：第一次使用時通常需要校正 (畫圓圈)。</p>
            `
            },
            {
                title: "電子羅盤：實作 (2/2)",
                content: `
                <p>做一個簡單的指南針。</p>
                <div class="step-box">
                    <h3>任務 3：永遠指向北方</h3>
                    <p>如果 <span class="block b-input">指南針方位</span> < 45 或 > 315：顯示 "N"。</p>
                </div>
                <p>這裡用到了 <span class="block b-logic">或 (OR)</span> 的邏輯，只要符合其中一個條件就算成立。</p>
            `
            },
            {
                title: "進階邏輯：巢狀判斷 (Nested If)",
                content: `
                <p>有時候一個條件不夠，我們會在 <code>如果</code> 裡面再放一個 <code>如果</code>。</p>
                <div class="step-box">
                    <h3>例子：開車</h3>
                    <p>如果 (有油) 那麼：</p>
                    <p style="margin-left: 20px">如果 (綠燈) 那麼 (前進)</p>
                    <p style="margin-left: 20px">否則 (停下)</p>
                    <p>否則 (去加油)</p>
                </div>
                <p>這叫做「巢狀結構」，像俄羅斯娃娃一樣一層套一層。</p>
            `
            },
            {
                title: "邏輯運算子 (Logic Operators)",
                content: `
                <p>讓你的判斷更強大！</p>
                <div class="step-box">
                    <h3>三大天王</h3>
                    <ul>
                        <li><strong>且 (AND)</strong>：兩個都要對才行。(例如：考100分 <strong>且</strong> 有做家事 => 買玩具)</li>
                        <li><strong>或 (OR)</strong>：只要一個對就行。(例如：星期六 <strong>或</strong> 星期日 => 放假)</li>
                        <li><strong>不 (NOT)</strong>：唱反調。(例如：<strong>不</strong> 是晴天 => 帶傘)</li>
                    </ul>
                </div>
            `
            },
            {
                title: "課堂挑戰：電子水平儀 (1/2)",
                content: `
                <p>現在我們要結合今天學到的東西，做一個實用的工具。</p>
                <div class="step-box">
                    <h3>挑戰目標</h3>
                    <p>利用 LED 矩陣顯示目前的傾斜狀態。</p>
                    <ul>
                        <li>點點要在螢幕上跟著傾斜方向跑。</li>
                        <li>向左傾斜，點點往左跑；向前傾斜，點點往前跑。</li>
                        <li>完全平放時，點點在正中間 (2, 2)。</li>
                    </ul>
                </div>
            `
            },
            {
                title: "課堂挑戰：實作提示 (2/2)",
                content: `
                <p>這有點難度喔！提示一下：</p>
                <div class="step-box">
                    <h3>演算法提示</h3>
                    <ol>
                        <li>讀取 <span class="block b-input">加速度 X</span> 和 <span class="block b-input">加速度 Y</span>。</li>
                        <li>把數值 (-1023 ~ 1023) 轉換成座標 (0 ~ 4)。</li>
                        <li>這需要用到 <span class="block b-math">映射 (Map)</span> 積木 (我們下週會細講，今天先試著用簡單的 if/else 做)。</li>
                    </ol>
                </div>
                <p>試著用 5 個 if/else 來判斷 X 的位置！</p>
            `
            },
            {
                title: "第三週總結",
                content: `
                <p>這週我們讓 Micro:bit 有了感覺！</p>
                <div class="step-box">
                    <h3>學會了什麼？</h3>
                    <ul>
                        <li>讀取光線、溫度、傾斜、方位。</li>
                        <li>使用 <code>if / else if / else</code> 做複雜判斷。</li>
                        <li>邏輯運算子 (AND, OR, NOT)。</li>
                    </ul>
                </div>
                <p>下週我們要進入更進階的程式邏輯，準備開始做遊戲囉！</p>
            `
            }
        ]
    },
    {
        name: "第 4 週：進階遊戲邏輯",
        slides: [
            {
                title: "第四週：進階遊戲邏輯",
                content: `
                    <p>歡迎來到遊戲開發的前哨站！</p>
                    <p>在開始製作「銀河保衛者」之前，我們需要先熟悉一些遊戲設計的核心觀念。</p>
                    <div class="step-box">
                        <h3>本週目標</h3>
                        <ul>
                            <li><strong>遊戲迴圈 (Game Loop)</strong>：遊戲是怎麼動起來的？</li>
                            <li><strong>精靈 (Sprite)</strong>：如何用變數控制角色？</li>
                            <li><strong>碰撞偵測 (Collision)</strong>：怎麼知道兩個東西撞在一起？</li>
                            <li>實作小遊戲：「接金幣」。</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "遊戲迴圈 (Game Loop)",
                content: `
                    <p>所有的遊戲，其實都是一個跑不停的「無限迴圈」。</p>
                    <div class="step-box">
                        <h3>遊戲的三步驟</h3>
                        <ol>
                            <li><strong>輸入</strong>：讀取按鈕、感測器。</li>
                            <li><strong>更新</strong>：計算角色移動、分數變化。</li>
                            <li><strong>繪製</strong>：把畫面畫在 LED 上。</li>
                        </ol>
                    </div>
                    <p>這三個步驟每秒鐘重複幾十次，看起來就像是連續的動畫。</p>
                `
            },
            {
                title: "角色控制：精靈 (Sprite)",
                content: `
                    <p>在遊戲中，我們通常把會動的東西叫做「精靈」。</p>
                    <p>要控制一個精靈，我們至少需要兩個變數：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-var">變數 PlayerX</span> (左右位置)</div>
                        <div class="block-row"><span class="block b-var">變數 PlayerY</span> (上下位置)</div>
                    </div>
                    <p>只要改變這兩個變數，精靈就會移動！</p>
                `
            },
            {
                title: "實作：移動的光點 (1/2)",
                content: `
                    <p>我們來試著用變數控制一個光點。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 X 設為 2</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 Y 設為 2</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: X y: Y</span></div>
                    </div>
                `
            },
            {
                title: "實作：移動的光點 (2/2)",
                content: `
                    <p>接著讓它往右跑！</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當按鈕 B 被按下</span></div>
                        <div class="block-row indent"><span class="block b-led">滅掉 x: X y: Y</span> (先擦掉舊的)</div>
                        <div class="block-row indent"><span class="block b-var">變數 X 改變 1</span> (移動)</div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: X y: Y</span> (畫上新的)</div>
                    </div>
                    <p>這就是角色移動的基本原理：<strong>擦掉 -> 移動 -> 重畫</strong>。</p>
                `
            },
            {
                title: "碰撞偵測 (Collision) (1/2)",
                content: `
                    <p>怎麼知道「吃到金幣」或是「撞到牆壁」了？</p>
                    <p>我們需要比較 **座標**。</p>
                    <div class="step-box">
                        <h3>邏輯判斷</h3>
                        <p>如果 (玩家X == 金幣X) 且 (玩家Y == 金幣Y)</p>
                        <p>那麼 -> 得分！</p>
                    </div>
                `
            },
            {
                title: "碰撞偵測 (Collision) (2/2)",
                content: `
                    <p>那怎麼知道「撞到牆壁」？</p>
                    <div class="step-box">
                        <h3>邊界檢查</h3>
                        <p>如果 (X > 4) -> 撞到右牆</p>
                        <p>如果 (X < 0) -> 撞到左牆</p>
                    </div>
                    <p>在寫遊戲時，我們要隨時檢查這些條件。</p>
                `
            },
            {
                title: "小遊戲：接金幣 (1/3)",
                content: `
                    <p>我們來做一個簡單的練習：</p>
                    <p>玩家在最下面 (Y=4) 左右移動，接住天上掉下來的金幣。</p>
                    <div class="step-box">
                        <h3>變數設定</h3>
                        <ul>
                            <li><strong>PlayerX</strong>：玩家位置 (0~4)。</li>
                            <li><strong>CoinX</strong>：金幣位置 (隨機)。</li>
                            <li><strong>CoinY</strong>：金幣高度 (0~4)。</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "小遊戲：接金幣 (2/3)",
                content: `
                    <p>金幣掉落的邏輯：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-led">滅掉 x: CoinX y: CoinY</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 CoinY 改變 1</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: CoinX y: CoinY</span></div>
                        <div class="block-row indent"><span class="block b-basic">暫停 500 ms</span></div>
                    </div>
                `
            },
            {
                title: "小遊戲：接金幣 (3/3)",
                content: `
                    <p>最後加上碰撞判斷：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 CoinY == 4 且 CoinX == PlayerX</span></div>
                        <div class="block-row indent"><span class="block b-basic">顯示圖示 (愛心)</span> (接到啦！)</div>
                    </div>
                    <p>這就是下週「銀河保衛者」的雛形喔！</p>
                `
            },
            {
                title: "第四週總結",
                content: `
                    <p>這週我們學會了遊戲開發的三大支柱：</p>
                    <ul>
                        <li><strong>變數座標</strong>：控制物體位置。</li>
                        <li><strong>遊戲迴圈</strong>：讓物體動起來。</li>
                        <li><strong>碰撞偵測</strong>：判斷遊戲規則。</li>
                    </ul>
                    <p>下週，我們將正式開始製作專題：<strong>銀河保衛者</strong>！</p>
                `
            }
        ]
    },
    {
        name: "第 5 週：專題 - 銀河保衛者 (上)",
        slides: [
            {
                title: "第五週：銀河保衛者 (上)",
                content: `
                    <p>歡迎來到銀河防衛隊！</p>
                    <p>這兩週我們將製作一款完整的遊戲：<strong>Galaxy Dodger (太空閃避戰)</strong>。</p>
                    <div class="step-box">
                        <h3>任務簡報</h3>
                        <p>你駕駛著一艘太空船，必須在隕石雨中生存下來。</p>
                        <ul>
                            <li><strong>控制</strong>：左右傾斜機身。</li>
                            <li><strong>敵人</strong>：不斷落下的隕石。</li>
                            <li><strong>目標</strong>：活下去！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Phase 1: 駕駛訓練",
                content: `
                    <p>首先，我們要學會控制太空船。</p>
                    <p>為了保護機身 (還有 Micro:bit 的按鈕)，我們這次使用 **體感控制**。</p>
                    <div class="step-box">
                        <h3>加速度計 (Accelerometer)</h3>
                        <p>還記得第 3 週學過的 X 軸嗎？</p>
                        <ul>
                            <li>向左傾斜 -> X 變小 (負數)。</li>
                            <li>向右傾斜 -> X 變大 (正數)。</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "映射 (Map) 的魔法",
                content: `
                    <p>加速度的值是 -1023 到 1023，但我們的螢幕只有 0 到 4。</p>
                    <p>這時候就需要 **映射 (Map)** 積木。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-math">映射 <span class="block b-input">加速度 X</span></span></div>
                        <div class="block-row indent">從 <span class="block b-input">-1023</span> 到 <span class="block b-input">1023</span></div>
                        <div class="block-row indent">轉換為 <span class="block b-input">0</span> 到 <span class="block b-input">4</span></div>
                    </div>
                    <p>這樣我們就能把傾斜的角度，完美對應到 LED 的位置了！</p>
                `
            },
            {
                title: "實作：太空船控制",
                content: `
                    <p>讓我們把太空船顯示在最下面一行 (Y=4)。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-basic">清除螢幕</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 PlayerX 設為 (映射 加速度 X...)</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: PlayerX y: 4</span></div>
                    </div>
                    <p>試試看右邊的模擬器，調整 <span class="block b-input">Tilt X</span> 滑桿，太空船會動嗎？</p>
                `
            },
            {
                title: "Phase 2: 隕石來襲",
                content: `
                    <p>太空船準備好了，接下來是敵人！</p>
                    <p>隕石會從最上面 (Y=0) 隨機出現，然後慢慢掉下來。</p>
                    <div class="step-box">
                        <h3>隕石變數</h3>
                        <ul>
                            <li><strong>RockX</strong>：隨機取數 0 到 4。</li>
                            <li><strong>RockY</strong>：從 0 開始，慢慢增加。</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "實作：隕石掉落",
                content: `
                    <p>我們用一個獨立的迴圈來控制隕石。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: RockX y: RockY</span></div>
                        <div class="block-row indent"><span class="block b-basic">暫停 500 ms</span></div>
                        <div class="block-row indent"><span class="block b-led">滅掉 x: RockX y: RockY</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 RockY 改變 1</span></div>
                    </div>
                `
            },
            {
                title: "無限隕石 (Looping Rocks)",
                content: `
                    <p>隕石掉到底部 (Y > 4) 之後怎麼辦？</p>
                    <p>我們要讓它「重生」！</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 RockY > 4 那麼</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 RockY 設為 0</span> (回到頂部)</div>
                        <div class="block-row indent"><span class="block b-var">變數 RockX 設為 隨機取數 0~4</span> (換個位置)</div>
                    </div>
                    <p>這樣就會有源源不絕的隕石掉下來了。</p>
                `
            },
            {
                title: "第五週總結",
                content: `
                    <p>這週我們完成了遊戲的一半！</p>
                    <div class="step-box">
                        <h3>進度檢查</h3>
                        <ul>
                            <li>[v] 太空船可以左右移動 (體感控制)。</li>
                            <li>[v] 隕石會不斷掉落並重生。</li>
                        </ul>
                    </div>
                    <p>但是...現在撞到隕石也不會怎麼樣。下週我們要加入「碰撞偵測」和「計分」，讓遊戲變得完整！</p>
                `
            }
        ]
    },
    {
        name: "第 6 週：專題 - 銀河保衛者 (下)",
        slides: [
            {
                title: "第六週：銀河保衛者 (下)",
                content: `
                    <p>歡迎回來，指揮官！</p>
                    <p>上週我們做出了太空船和隕石，這週我們要讓遊戲變得「危險」且「刺激」。</p>
                    <div class="step-box">
                        <h3>本週目標</h3>
                        <ul>
                            <li><strong>碰撞偵測</strong>：撞到隕石要爆炸！</li>
                            <li><strong>計分系統</strong>：閃過一顆隕石得 1 分。</li>
                            <li><strong>遊戲結束</strong>：顯示最終分數。</li>
                            <li><strong>難度提升</strong>：越玩越快！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "危險時刻：碰撞偵測",
                content: `
                    <p>什麼時候算「撞到」？</p>
                    <p>當隕石掉到最下面 (Y=4)，而且剛好在太空船的位置 (RockX == PlayerX) 時。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 RockY == 4 且 RockX == PlayerX</span></div>
                        <div class="block-row indent"><span class="block b-basic">遊戲結束 (Game Over)</span></div>
                    </div>
                `
            },
            {
                title: "實作：遊戲結束",
                content: `
                    <p>在 MakeCode 裡，有一個專門的積木叫做 <span class="block b-basic">遊戲結束</span>。</p>
                    <p>它會自動幫你：</p>
                    <ol>
                        <li>停止遊戲。</li>
                        <li>顯示 "GAME OVER"。</li>
                        <li>顯示你的分數。</li>
                    </ol>
                    <p>超方便的！</p>
                `
            },
            {
                title: "計分系統 (Scoring)",
                content: `
                    <p>如果隕石掉到底部卻 **沒有** 撞到太空船，那就代表我們閃避成功！</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 RockY > 4 (掉出去了)</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 分數 改變 1</span></div>
                        <div class="block-row indent"><span class="block b-basic">重設隕石...</span></div>
                    </div>
                `
            },
            {
                title: "完整遊戲邏輯",
                content: `
                    <p>把所有東西組裝起來：</p>
                    <div class="step-box">
                        <h3>遊戲迴圈</h3>
                        <ol>
                            <li>移動太空船 (讀取傾斜)。</li>
                            <li>移動隕石 (Y 改變 1)。</li>
                            <li><strong>檢查碰撞</strong> (如果撞到 -> 結束)。</li>
                            <li><strong>檢查得分</strong> (如果閃過 -> 加分)。</li>
                            <li>暫停 (控制速度)。</li>
                        </ol>
                    </div>
                `
            },
            {
                title: "進階挑戰：加速！",
                content: `
                    <p>覺得太簡單了嗎？讓我們讓它越來越快！</p>
                    <p>我們可以建立一個變數 <span class="block b-var">速度 (Speed)</span>。</p>
                    <ul>
                        <li>一開始設為 500ms。</li>
                        <li>每得 1 分，速度就減少 10ms (變快)。</li>
                        <li>暫停 (ms) <span class="block b-var">速度</span>。</li>
                    </ul>
                    <p>看看你能撐多久！</p>
                `
            },
            {
                title: "專題展示：銀河保衛者",
                content: `
                    <p>現在，試試看右邊的模擬器！</p>
                    <div class="step-box">
                        <h3>操作說明</h3>
                        <ul>
                            <li>調整 <strong>Tilt X</strong> 滑桿來移動太空船。</li>
                            <li>閃避掉下來的紅點。</li>
                            <li>看看你能得幾分！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "課程結語",
                content: `
                    <p>恭喜你完成了 6 週的 Micro:bit 課程！</p>
                    <p>從點亮第一顆 LED，到完成一個體感遊戲，你已經是一個小小創客了。</p>
                    <p>Micro:bit 還有很多功能 (無線電、藍牙、音樂...) 等著你去探索。</p>
                    <p>繼續發揮創意，創造更多好玩的東西吧！</p>
                `
            }
        ]
    },
];

// Navigation State
let currentWeekIndex = 0;
let currentSlideIndex = 0;

// Initialize
function initSlides() {
    // Reset to first week, first slide on load
    currentWeekIndex = 0;
    currentSlideIndex = 0;
}
initSlides();

// --- VIRTUAL MICRO:BIT ENGINE ---

class VirtualMicrobit {
    constructor() {
        this.leds = []; // 5x5 array
        this.gridElement = document.getElementById('ledGrid');
        this.statusElement = document.getElementById('simulation-status');
        this.initGrid();
        this.animationInterval = null;

        // Sensor State
        this.sensors = {
            light: 128,
            temperature: 25,
            compass: 0,
            acceleration: { x: 0, y: 0, z: -1023 }
        };

        this.initSensors();
    }

    initSensors() {
        const bindSensor = (id, key, subKey = null) => {
            const el = document.getElementById(id);
            const valEl = document.getElementById(id.replace('sensor-', 'val-'));
            if (el && valEl) {
                el.addEventListener('input', (e) => {
                    const val = parseInt(e.target.value);
                    valEl.textContent = val;
                    if (subKey) {
                        this.sensors[key][subKey] = val;
                    } else {
                        this.sensors[key] = val;
                    }
                    // Trigger potential "on change" events here if needed
                });
            }
        };

        bindSensor('sensor-light', 'light');
        bindSensor('sensor-temp', 'temperature');
        bindSensor('sensor-compass', 'compass');
        bindSensor('sensor-tilt-x', 'acceleration', 'x');
        bindSensor('sensor-tilt-y', 'acceleration', 'y');
    }

    initGrid() {
        this.gridElement.innerHTML = '';
        this.leds = [];
        for (let y = 0; y < 5; y++) {
            let row = [];
            for (let x = 0; x < 5; x++) {
                const led = document.createElement('div');
                led.className = 'led';
                led.dataset.x = x;
                led.dataset.y = y;
                this.gridElement.appendChild(led);
                row.push(led);
            }
            this.leds.push(row);
        }
    }

    clear() {
        this.stopAnimation();
        this.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
        this.statusElement.textContent = "等待指令...";
    }

    plot(x, y) {
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            this.leds[y][x].classList.add('on');
        }
    }

    unplot(x, y) {
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            this.leds[y][x].classList.remove('on');
        }
    }

    toggle(x, y) {
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            this.leds[y][x].classList.toggle('on');
        }
    }

    showIcon(iconName, preventStop = false) {
        if (!preventStop) {
            this.clear();
        } else {
            // Just clear LEDs, don't stop animation
            this.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
        }

        const icons = {
            "HEART": [
                "01010",
                "11111",
                "11111",
                "01110",
                "00100"
            ],
            "HEART_SMALL": [
                "00000",
                "01010",
                "01110",
                "00100",
                "00000"
            ],
            "HAPPY": [
                "00000",
                "01010",
                "00000",
                "10001",
                "01110"
            ],
            "SAD": [
                "00000",
                "01010",
                "00000",
                "01110",
                "10001"
            ],
            "CHECK": [
                "00000",
                "00001",
                "00010",
                "10100",
                "01000"
            ]
        };

        const pattern = icons[iconName];
        if (pattern) {
            if (!preventStop) this.statusElement.textContent = `顯示圖示: ${iconName}`;
            pattern.forEach((row, y) => {
                for (let x = 0; x < 5; x++) {
                    if (row[x] === '1') this.plot(x, y);
                }
            });
        }
    }

    stopAnimation() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }
    }

    // Animation Helpers
    animateHeartBeat() {
        this.stopAnimation();
        this.statusElement.textContent = "執行程式: 心跳動畫";
        let state = 0;
        this.animationInterval = setInterval(() => {
            if (state === 0) {
                this.showIcon("HEART", true);
                state = 1;
            } else {
                this.showIcon("HEART_SMALL", true);
                state = 0;
            }
        }, 500);
    }

    animateMeteor() {
        this.stopAnimation();
        this.statusElement.textContent = "執行程式: 流星燈";
        let x = 0;
        this.animationInterval = setInterval(() => {
            this.leds.forEach(row => row.forEach(led => led.classList.remove('on'))); // Clear manually to avoid stopping interval
            this.plot(x, 2);
            x++;
            if (x > 4) x = 0;
        }, 200);
    }

    animateCoordinates() {
        this.stopAnimation();
        this.statusElement.textContent = "顯示座標點 (0,0), (2,2), (4,4)";
        this.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
        this.plot(0, 0);
        this.plot(2, 2);
        this.plot(4, 4);
    }
}

// --- APP LOGIC ---

const mb = new VirtualMicrobit();

const slideContent = document.getElementById('slideContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
const progressFill = document.getElementById('progressFill');
const weekSelector = document.getElementById('weekSelector');

// Populate Week Selector
function initWeekSelector() {
    if (!weekSelector) return;
    weekSelector.innerHTML = '';
    weeks.forEach((week, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = week.name;
        weekSelector.appendChild(option);
    });

    weekSelector.addEventListener('change', (e) => {
        const newWeekIndex = parseInt(e.target.value);
        if (!isNaN(newWeekIndex) && weeks[newWeekIndex]) {
            currentWeekIndex = newWeekIndex;
            currentSlideIndex = 0; // Reset to first slide of the new week
            renderSlide(currentSlideIndex);
        }
    });
}

// Define animations for specific slides
const slideActions = {
    "第一支程式：心跳 (1/2)": () => mb.showIcon("HEART"),
    "第一支程式：心跳 (2/2)": () => {
        console.log("Triggering Heartbeat Animation"); // Debug
        mb.animateHeartBeat();
    },
    "控制單顆 LED (2/2)": () => mb.animateCoordinates(),
    "專題實作：流星燈 (1/3)": () => {
        mb.clear();
        mb.plot(0, 2);
        mb.statusElement.textContent = "步驟 1: 點亮 (0, 2)";
    },
    "專題實作：流星燈 (2/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "步驟 2: 燈光移動";
        setTimeout(() => mb.plot(0, 2), 0);
        setTimeout(() => mb.unplot(0, 2), 200);
        setTimeout(() => mb.plot(1, 2), 200);
    },
    "專題實作：流星燈 (3/3)": () => mb.animateMeteor(),
    "進階挑戰：迴圈 (Loops)": () => mb.animateMeteor(),
    "實作：按鈕測試 (1/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 A 鍵試試看！";
        document.getElementById('btnA').onclick = () => {
            mb.statusElement.textContent = "A 鍵被按下";
            // Simulate showing string "A" (simplified as a check for now)
            mb.showIcon("CHECK");
            setTimeout(() => mb.clear(), 1000);
        };
    },
    "實作：按鈕測試 (2/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 B 鍵試試看！";
        document.getElementById('btnB').onclick = () => {
            mb.statusElement.textContent = "B 鍵被按下";
            mb.showIcon("HAPPY");
            setTimeout(() => mb.clear(), 1000);
        };
    },
    "實作：按鈕測試 (3/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "試試看觸摸金色 Logo！";
        const logo = document.getElementById('touchLogo');
        if (logo) {
            logo.onclick = () => {
                mb.statusElement.textContent = "Logo 被觸摸！";
                mb.showIcon("HEART");
                logo.classList.add('active');
                setTimeout(() => {
                    mb.clear();
                    logo.classList.remove('active');
                }, 1000);
            };
        }
    },
    // --- Week 4 Actions ---
    "實作：移動的光點 (1/2)": () => {
        mb.clear();
        mb.plot(2, 2);
        mb.statusElement.textContent = "變數 X=2, Y=2";
    },
    "實作：移動的光點 (2/2)": () => {
        mb.clear();
        let x = 2;
        let y = 2;
        mb.plot(x, y);
        mb.statusElement.textContent = "按下 B 鍵向右移動";
        document.getElementById('btnB').onclick = () => {
            if (x < 4) {
                mb.unplot(x, y);
                x++;
                mb.plot(x, y);
                mb.statusElement.textContent = `X=${x}, Y=${y}`;
            }
        };
    },
    "小遊戲：接金幣 (3/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "按 A/B 左右移動接金幣";
        let playerX = 2;
        let coinX = Math.floor(Math.random() * 5);
        let coinY = 0;

        mb.plot(playerX, 4);
        mb.plot(coinX, coinY);

        document.getElementById('btnA').onclick = () => { if (playerX > 0) { mb.unplot(playerX, 4); playerX--; mb.plot(playerX, 4); } };
        document.getElementById('btnB').onclick = () => { if (playerX < 4) { mb.unplot(playerX, 4); playerX++; mb.plot(playerX, 4); } };

        mb.animationInterval = setInterval(() => {
            mb.unplot(coinX, coinY);
            coinY++;
            if (coinY > 4) {
                // Check collision
                if (coinX === playerX) {
                    mb.showIcon("HEART", true); // Caught!
                    setTimeout(() => mb.clear(), 500); // Reset visual
                }
                // Reset coin
                coinY = 0;
                coinX = Math.floor(Math.random() * 5);
            }
            mb.plot(playerX, 4); // Redraw player just in case
            mb.plot(coinX, coinY);
        }, 500);
    },
    // --- Week 5 Actions ---
    "實作：太空船控制": () => {
        mb.clear();
        mb.statusElement.textContent = "調整 Tilt X 滑桿來控制";
        mb.animationInterval = setInterval(() => {
            mb.clear();
            // Map -1023~1023 to 0~4
            const tiltX = mb.sensors.acceleration.x;
            let playerX = Math.floor((tiltX + 1023) / 2048 * 5);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;

            mb.plot(playerX, 4);
            mb.statusElement.textContent = `Tilt: ${tiltX} -> X: ${playerX}`;
        }, 100);
    },
    "實作：隕石掉落": () => {
        mb.clear();
        let rockX = 2;
        let rockY = 0;
        mb.animationInterval = setInterval(() => {
            mb.clear();
            mb.plot(rockX, rockY);
            rockY++;
            if (rockY > 4) {
                rockY = 0;
                rockX = Math.floor(Math.random() * 5);
            }
        }, 500);
    },
    // --- Week 6 Actions (Full Game) ---
    "專題展示：銀河保衛者": () => {
        mb.clear();
        mb.statusElement.textContent = "遊戲開始！調整 Tilt X 閃避";

        let score = 0;
        let rockX = Math.floor(Math.random() * 5);
        let rockY = 0;
        let speed = 500;
        let isGameOver = false;

        mb.animationInterval = setInterval(() => {
            if (isGameOver) return;

            // 1. Update Player Position
            const tiltX = mb.sensors.acceleration.x;
            let playerX = Math.floor((tiltX + 1023) / 2048 * 5);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;

            // Clear screen logic is tricky with persistence, so we redraw everything
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));

            // Draw Player
            mb.plot(playerX, 4);

            // Draw Rock
            mb.plot(rockX, rockY);

            // Logic Update (Move Rock)
            // We need a separate timer for rock movement or use a counter
            // For simplicity in this demo, we move rock every tick, but tick is slow?
            // Let's use a counter to slow down rock relative to player update
        }, 100);

        // Separate loop for game logic to allow smooth player movement
        let gameLoop = setInterval(() => {
            if (isGameOver) return;

            // Move Rock
            rockY++;

            // Collision Check (at Y=4)
            // We need current playerX. We can read from sensor directly.
            const tiltX = mb.sensors.acceleration.x;
            let playerX = Math.floor((tiltX + 1023) / 2048 * 5);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;

            if (rockY === 4 && rockX === playerX) {
                isGameOver = true;
                mb.showIcon("SAD");
                mb.statusElement.textContent = `GAME OVER! Score: ${score}`;
                clearInterval(gameLoop);
                return;
            }

            // Scoring / Reset Rock
            if (rockY > 4) {
                score++;
                rockY = 0;
                rockX = Math.floor(Math.random() * 5);
                mb.statusElement.textContent = `Score: ${score}`;

                // Increase speed (optional, requires clearing and resetting interval which is complex here)
            }

            // Redraw happens in the render loop above, but we need to ensure sync.
            // Actually, let's just do simple redraw here for the rock, player loop handles player.
        }, 600);

        // Store gameLoop to clear it later if needed (mb.stopAnimation only clears animationInterval)
        // We need to hack mb.stopAnimation to clear this too or attach it to mb
        mb.extraInterval = gameLoop;
        const originalStop = mb.stopAnimation.bind(mb);
        mb.stopAnimation = () => {
            originalStop();
            if (mb.extraInterval) clearInterval(mb.extraInterval);
        };
    }
};

// updateWeekSelectorState removed as it is no longer needed

function renderSlide(index) {
    try {
        const currentWeekSlides = weeks[currentWeekIndex].slides;

        // Safety check
        if (index < 0 || index >= currentWeekSlides.length) {
            return;
        }

        const slide = currentWeekSlides[index];

        slideContent.innerHTML = `
            <h1>${slide.title}</h1>
            ${slide.content}
        `;

        // Update UI
        slideCounter.textContent = `${index + 1} / ${currentWeekSlides.length}`;

        // Disable buttons at week boundaries
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === currentWeekSlides.length - 1;

        const progress = ((index + 1) / currentWeekSlides.length) * 100;
        progressFill.style.width = `${progress}%`;

        // Sync selector if needed (though usually selector drives this)
        if (weekSelector.value != currentWeekIndex) {
            weekSelector.value = currentWeekIndex;
        }

        // Trigger Virtual Micro:bit Action
        mb.clear(); // Reset first

        // Remove old event listeners
        const btnA = document.getElementById('btnA');
        const btnB = document.getElementById('btnB');
        const logo = document.getElementById('touchLogo');

        if (btnA && btnB) {
            const newBtnA = btnA.cloneNode(true);
            const newBtnB = btnB.cloneNode(true);
            btnA.parentNode.replaceChild(newBtnA, btnA);
            btnB.parentNode.replaceChild(newBtnB, btnB);
        }
        if (logo) {
            const newLogo = logo.cloneNode(true);
            logo.parentNode.replaceChild(newLogo, logo);
        }

        // Exact match check
        const action = slideActions[slide.title.trim()];
        if (action) {
            action();
        } else {
            // Default idle state
            mb.statusElement.textContent = "等待指令...";
        }

    } catch (e) {
        console.error("Error rendering slide:", e);
        slideContent.innerHTML = `<p style='color:red'>載入投影片時發生錯誤：${e.message}</p>`;
    }
}

// Event Listeners
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlide(currentSlideIndex);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const currentWeekSlides = weeks[currentWeekIndex].slides;
        if (currentSlideIndex < currentWeekSlides.length - 1) {
            currentSlideIndex++;
            renderSlide(currentSlideIndex);
        }
    });
}

// Initial Render
console.log("App starting...");
initWeekSelector();
renderSlide(currentSlideIndex);
