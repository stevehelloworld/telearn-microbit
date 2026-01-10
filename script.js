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
        title: "深入動畫：影格 (Frame) (1/2)",
        content: `
            <p>每一張靜止的圖片，我們稱為一個 **影格 (Frame)**。</p>
            <p>要做出流暢的動畫，我們需要設計好每一個影格的樣子。</p>
            <div class="step-box">
                <h3>範例：閃爍的愛心</h3>
                <ul>
                    <li>Frame 1: 大愛心</li>
                    <li>Frame 2: 滅掉 (或小愛心)</li>
                    <li>Frame 3: 大愛心</li>
                </ul>
            </div>
        `
    },
    {
        title: "深入動畫：影格 (Frame) (2/2)",
        content: `
            <p>如果影格之間變化太大，動畫就會看起來卡卡的。</p>
            <p>讓我們試著做一個「心跳變快」的效果。</p>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">顯示圖示 ♥</span></div>
                <div class="block-row"><span class="block b-basic">暫停 500 ms</span></div>
                <div class="block-row"><span class="block b-basic">顯示圖示 .</span></div>
                <div class="block-row"><span class="block b-basic">暫停 200 ms</span> (休息時間變短)</div>
            </div>
        `
    },
    {
        title: "跑馬燈 (Scrolling Text) (1/3)",
        content: `
            <p>除了圖案，Micro:bit 最常用的功能就是顯示文字。</p>
            <p>因為螢幕只有 5x5，所以文字會像跑馬燈一樣捲動。</p>
            <div class="step-box">
                <h3>基本指令</h3>
                <p><span class="block b-basic">顯示字串 "Hello!"</span></p>
            </div>
            <p>注意：只能顯示 **英文** 和 **數字** 喔！(中文太複雜了)</p>
        `
    },
    {
        title: "跑馬燈 (Scrolling Text) (2/3)",
        content: `
            <p>如果你想讓你的名字一直顯示，該放在哪裡？</p>
            <p>沒錯，就是 <span class="block b-basic">重複無限次</span>。</p>
            <div class="block-container">
                <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                <div class="block-row indent"><span class="block b-basic">顯示字串 "Steve"</span></div>
                <div class="block-row indent"><span class="block b-basic">暫停 1000 ms</span> (跑完休息一下)</div>
            </div>
        `
    },
    {
        title: "跑馬燈 (Scrolling Text) (3/3)",
        content: `
            <p>我們可以控制跑馬燈的速度嗎？當然可以！</p>
            <p>這需要用到 <span class="block b-led">更多 > 捲動速度</span> (在模擬器上可能無法明顯看到差異，但在實體機上有用)。</p>
            <p>試著輸入很長的句子，觀察它怎麼捲動。</p>
        `
    },
    {
        title: "挑戰：圖形繪製 (1/3)",
        content: `
            <p>回到 LED 控制。我們來練習用座標畫出形狀。</p>
            <div class="step-box">
                <h3>挑戰 1：畫一個正方形</h3>
                <p>請點亮四個角落的燈：</p>
                <ul>
                    <li>(0, 0), (4, 0)</li>
                    <li>(0, 4), (4, 4)</li>
                </ul>
            </div>
        `
    },
    {
        title: "挑戰：圖形繪製 (2/3)",
        content: `
            <p>接下來難一點點。</p>
            <div class="step-box">
                <h3>挑戰 2：畫一個 X</h3>
                <p>提示：X 的座標有什麼規律？</p>
                <ul>
                    <li>(0, 0), (1, 1), (2, 2)... (X 等於 Y)</li>
                    <li>(4, 0), (3, 1), (2, 2)... (X 加 Y 等於 4)</li>
                </ul>
            </div>
        `
    },
    {
        title: "挑戰：圖形繪製 (3/3)",
        content: `
            <p>利用我們剛剛學的規律，你可以畫出很酷的幾何圖形。</p>
            <p>這就是電腦繪圖 (Computer Graphics) 的基礎喔！即使是最厲害的 3D 遊戲，底層也是這樣一個點一個點畫出來的。</p>
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
                <h3>任務 3：觸摸 Logo (V2 功能)</h3>
                <ol>
                    <li>在 <span class="block b-input">輸入</span> 積木盒找到 <span class="block b-input">當標誌被按下</span>。</li>
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
                <h3>挑戰：觸摸 Logo 扣分</h3>
                <ol>
                    <li>在 <span class="block b-input">當標誌被按下</span> 裡面。</li>
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
                <li><strong>觸摸 Logo</strong>：Score - 1。</li>
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
                <h3>我們學會了：</h3>
                <ul>
                    <li>按鈕事件 (Event) 的使用。</li>
                    <li>如何建立、修改、讀取變數。</li>
                    <li>基本的邏輯判斷 (如果...那麼)。</li>
                </ul>
            </div>
            <p>準備好迎接下一週了嗎？我們要開始玩真正的感測器了！</p>
        `
    },
    {
        title: "進階邏輯：布林值 (Boolean) (1/3)",
        content: `
            <p>有些變數比較特別，它只有兩種狀態：<strong>真 (True)</strong> 或 <strong>假 (False)</strong>。</p>
            <p>這種變數我們稱為 <strong>布林值</strong> (就像是一個開關)。</p>
            <div class="step-box">
                <h3>例子：開關燈</h3>
                <ul>
                    <li><code>isLightOn = True</code> (燈是亮的)</li>
                    <li><code>isLightOn = False</code> (燈是暗的)</li>
                </ul>
            </div>
        `
    },
    {
        title: "進階邏輯：切換開關 (2/3)",
        content: `
            <p>怎麼做一個「切換」開關？(按一下開，再按一下關)</p>
            <div class="block-container">
                <div class="block-row"><span class="block b-input">當按鈕 A 被按下</span></div>
                <div class="block-row indent"><span class="block b-vars">變數 isLightOn 設為 (非 isLightOn)</span></div>
            </div>
            <p><strong>非 (Not)</strong> 是一個很厲害的運算子，它會把 True 變 False，把 False 變 True。</p>
        `
    },
    {
        title: "進階邏輯：AND 與 OR (3/3)",
        content: `
            <p>如果我們要同時滿足兩個條件呢？</p>
            <div class="step-box">
                <h3>邏輯運算子</h3>
                <ul>
                    <li><strong>且 (AND)</strong>：兩個條件都要成立。 (例如：分數>10 且 時間<60)</li>
                    <li><strong>或 (OR)</strong>：只要有一個成立就好。 (例如：按 A 或 按 B)</li>
                </ul>
            </div>
            <p>這在複雜的遊戲中非常常用喔！</p>
        `
    },
    {
        title: "專題加碼：電子骰子 V2 (1/2)",
        content: `
            <p>我們上週做過計數器，現在來做一個「真正的」骰子。</p>
            <div class="step-box">
                <h3>搖晃骰子</h3>
                <ol>
                    <li><span class="block b-input">當被搖晃</span> 時。</li>
                    <li><span class="block b-basic">顯示圖示 (隨機圖案)</span>... 不對，我們要有數字！</li>
                    <li><span class="block b-vars">變數 Dice 設為 隨機取數 1 到 6</span>。</li>
                    <li><span class="block b-basic">顯示數字 Dice</span>。</li>
                </ol>
            </div>
        `
    },
    {
        title: "專題加碼：電子骰子 V2 (2/2)",
        content: `
            <p>可是骰子有 1~6，我有時候想作弊怎麼辦？(誤)</p>
            <div class="step-box">
                <h3>作弊模式 (Cheat Mode)</h3>
                <p>我們可以用按鈕來偷改數字。</p>
                <ul>
                    <li>按 A 鍵：如果點數 < 6，點數 + 1。</li>
                    <li>按 B 鍵：如果點數 > 1，點數 - 1。</li>
                </ul>
            </div>
            <p>這樣就可以偷偷控制骰子的大小了！</p>
        `
    },
    {
        title: "挑戰：雙人計分板 (1/2)",
        content: `
            <p>如果有兩個隊伍在比賽，我們可以同時記錄分數嗎？</p>
            <div class="step-box">
                <h3>需要兩個變數</h3>
                <ul>
                    <li><strong>ScoreA</strong>：記錄 A 隊分數。</li>
                    <li><strong>ScoreB</strong>：記錄 B 隊分數。</li>
                </ul>
            </div>
        `
    },
    {
        title: "挑戰：雙人計分板 (2/2)",
        content: `
            <p>設計一個競速遊戲：</p>
            <ul>
                <li><strong>規則</strong>：誰先按滿 10 下 A 或 B，誰就獲勝！</li>
                <li><strong>A 隊</strong>：按 A 鍵加分。</li>
                <li><strong>B 隊</strong>：按 B 鍵加分。</li>
                <li><strong>獲勝</strong>：先到達 10 分的一方顯示 "WIN"。</li>
            </ul>
            <p>提示：你需要用 <span class="block b-logic">如果 分數A = 10</span> 來判斷是否獲勝。</p>
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
                title: "溫度感測器：實作 (1/2)",
                content: `
                <p>讓我們用溫度感測器做點有趣的事情。</p>
                <div class="step-box">
                    <h3>任務 1：溫度顯示器</h3>
                    <ol>
                        <li>在 <span class="block b-input">當按鈕 A 被按下</span> 裡面。</li>
                        <li>放入 <span class="block b-basic">顯示數字</span>。</li>
                        <li>再把 <span class="block b-input">溫度 (°C)</span> 放入數字框框中。</li>
                    </ol>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-input">當按鈕 A 被按下</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示數字 <span class="block b-input">溫度 (°C)</span></span></div>
                </div>
            `
            },
            {
                title: "溫度感測器：實作 (2/2)",
                content: `
                <p>我們來做一個「太熱警報器」。</p>
                <div class="step-box">
                    <h3>任務 2：當溫度超過 30°C 就發出警報</h3>
                    <p>邏輯：如果 (溫度 > 30) 那麼 (顯示火焰圖案)</p>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                    <div class="block-row indent"><span class="block b-logic">如果 <span class="block b-input">溫度</span> > 30 那麼</span></div>
                    <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示圖示 (火焰)</span></div>
                    <div class="block-row indent"><span class="block b-logic">否則</span></div>
                    <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示圖示 (笑臉)</span></div>
                </div>
            `
            },
            {
                title: "搖晃感測器 (Shake) (1/2)",
                content: `
                <p>除了傾斜，加速度計還可以偵測「搖晃」這個動作。</p>
                <div class="step-box">
                    <h3>搖晃的應用場景</h3>
                    <ul>
                        <li><strong>電子骰子</strong>：搖一搖出現隨機數字。</li>
                        <li><strong>計步器</strong>：走路的震動會觸發。</li>
                        <li><strong>抓寶遊戲</strong>：搖晃來捕捉怪物。</li>
                    </ul>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-input">當姿勢 晃動 發生</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示數字 (隨機取數 1 到 6)</span></div>
                </div>
            `
            },
            {
                title: "搖晃感測器 (Shake) (2/2)",
                content: `
                <p>讓我們做一個更完整的「電子骰子」。</p>
                <div class="step-box">
                    <h3>改良版電子骰子</h3>
                    <ol>
                        <li>搖晃時，先顯示「?」表示骰子在滾動。</li>
                        <li>暫停一下 (製造緊張感)。</li>
                        <li>再顯示隨機數字。</li>
                    </ol>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-input">當姿勢 晃動 發生</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示字串 "?"</span></div>
                    <div class="block-row indent"><span class="block b-basic">暫停 500 ms</span></div>
                    <div class="block-row indent"><span class="block b-vars">變數 Dice 設為 隨機取數 1~6</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示數字 <span class="block b-vars">Dice</span></span></div>
                </div>
            `
            },
            {
                title: "手勢偵測 (Gestures)",
                content: `
                <p>加速度計還能偵測更多手勢喔！</p>
                <div class="step-box">
                    <h3>其他手勢</h3>
                    <ul>
                        <li><strong>螢幕朝上</strong>：Micro:bit 正面朝上。</li>
                        <li><strong>螢幕朝下</strong>：Micro:bit 正面朝下 (蓋住)。</li>
                        <li><strong>向上拋 (Free Fall)</strong>：偵測自由落體。</li>
                        <li><strong>3G、6G、8G</strong>：偵測強烈震動。</li>
                    </ul>
                </div>
                <p>這些都可以在 <span class="block b-input">當姿勢 XX 發生</span> 的下拉選單中找到。</p>
            `
            },
            {
                title: "感測器組合應用 (1/2)",
                content: `
                <p>最酷的是，我們可以同時使用多個感測器！</p>
                <div class="step-box">
                    <h3>範例：智慧夜燈</h3>
                    <p>在黑暗中「拍手」(搖晃) 就可以開燈。</p>
                    <ul>
                        <li><strong>條件 1</strong>：光線 < 50 (夠暗)</li>
                        <li><strong>條件 2</strong>：被搖晃 (觸發開關)</li>
                    </ul>
                </div>
                <p>這需要結合光感測器和搖晃偵測！</p>
            `
            },
            {
                title: "感測器組合應用 (2/2)",
                content: `
                <p>另一個有趣的例子：會「害羞」的 Micro:bit。</p>
                <div class="step-box">
                    <h3>範例：害羞模式</h3>
                    <ol>
                        <li>光線很亮 (有人在看) → 顯示害羞表情。</li>
                        <li>光線很暗 (沒人注意) → 顯示開心表情。</li>
                        <li>被搖晃 (被嚇到) → 顯示驚訝表情！</li>
                    </ol>
                </div>
                <div class="block-container">
                    <div class="block-row"><span class="block b-input">當姿勢 晃動 發生</span></div>
                    <div class="block-row indent"><span class="block b-basic">顯示圖示 (驚訝)</span></div>
                </div>
            `
            },
            {
                title: "專題實作：動態溫度計 (1/2)",
                content: `
                <p>我們來做一個更實用的溫度計，用圖形來表示溫度高低。</p>
                <div class="step-box">
                    <h3>功能設計</h3>
                    <ul>
                        <li>溫度 ≤ 15°C：顯示一顆雪花 ❄️</li>
                        <li>溫度 16~25°C：顯示笑臉 😊</li>
                        <li>溫度 ≥ 26°C：顯示太陽/火焰 🔥</li>
                    </ul>
                </div>
                <p>這需要用到 <code>if / else if / else</code> 來做多重判斷！</p>
            `
            },
            {
                title: "專題實作：動態溫度計 (2/2)",
                content: `
                <p>來看看程式碼的結構：</p>
                <div class="block-container">
                    <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                    <div class="block-row indent"><span class="block b-logic">如果 <span class="block b-input">溫度</span> ≤ 15 那麼</span></div>
                    <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示圖示 (雪花)</span></div>
                    <div class="block-row indent"><span class="block b-logic">否則如果 <span class="block b-input">溫度</span> ≤ 25 那麼</span></div>
                    <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示圖示 (笑臉)</span></div>
                    <div class="block-row indent"><span class="block b-logic">否則</span></div>
                    <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示圖示 (太陽)</span></div>
                </div>
                <p>試著調整模擬器右下角的溫度滑桿，看看圖形會怎麼變化！</p>
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
                        <div class="block-row"><span class="block b-vars">PlayerX</span> (左右位置)</div>
                        <div class="block-row"><span class="block b-vars">PlayerY</span> (上下位置)</div>
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
                        <div class="block-row indent"><span class="block b-vars">變數 X 設為 2</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 Y 設為 2</span></div>
                        <div class="block-row indent"><span class="block b-led">繪製 x X y Y</div>
                    </div>
                `
            },
            {
                title: "實作：移動的光點 (2/2)",
                content: `
                    <p>接著讓它往右跑！</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當按鈕 B 被按下</span></div>
                        <div class="block-row indent"><span class="block b-led">取消繪製 x X y Y</span> (先擦掉舊的)</div>
                        <div class="block-row indent"><span class="block b-vars">變數 X 改變 1</span> (移動)</div>
                        <div class="block-row indent"><span class="block b-led">繪製 x X y Y</span> (畫上新的)</div>
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
                    <p>我們可以用一個變數 <code>GameState</code> 來記錄現在在哪個階段。</p>
                `
            },
            {
                title: "遊戲架構：狀態機 (2/2)",
                content: `
                    <p>程式碼會長這樣：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-logic">如果 GameState = 0 (標題)</span></div>
                        <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示字串 "PLAY"</span></div>
                        <div class="block-row indent"><span class="block b-logic">否則如果 GameState = 1 (遊戲中)</span></div>
                        <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">執行遊戲邏輯...</span></div>
                        <div class="block-row indent"><span class="block b-logic">否則 (結束)</span></div>
                        <div class="block-row indent" style="margin-left: 40px"><span class="block b-basic">顯示分數...</span></div>
                    </div>
                `
            },
            {
                title: "程式積木化：函式 (Functions)",
                content: `
                    <p>當程式越來越長，我們會找不到哪裡是哪裡。</p>
                    <p>這時候可以把重複這動作包成一個 <strong>函式 (Function)</strong>。</p>
                    <div class="step-box">
                        <h3>例子</h3>
                        <ul>
                            <li><code>函式 MovePlayer</code>：專門處理玩家移動。</li>
                            <li><code>函式 MoveEnemy</code>：專門處理敵人移動。</li>
                            <li><code>函式 CheckCrash</code>：專門檢查撞車。</li>
                        </ul>
                    </div>
                    <p>這樣主程式就會變得非常乾淨好讀！</p>
                `
            },
            {
                title: "進階碰撞：距離計算",
                content: `
                    <p>之前我們用 \`X == X\` 來判斷碰撞。</p>
                    <p>如果不只是 1 格，而是有體積的物體呢？</p>
                    <p>我們可以計算兩點之間的 **距離**。</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-math">距離 = ( (X1-X2)² + (Y1-Y2)² ) 的根號</span></div>
                    </div>
                    <p>不過...在 5x5 的 Micro:bit 上，直接比對座標通常就夠了 XD</p>
                `
            },
            {
                title: "專題預備：敵人的 AI",
                content: `
                    <p>下週我們要做的敵人，只會傻傻地往下掉嗎？</p>
                    <p>我們可以給它一點點智慧：</p>
                    <ul>
                        <li><strong>追蹤型</strong>：如果玩家在左邊，敵人就往左移。</li>
                        <li><strong>隨機型</strong>：隨機亂跑。</li>
                        <li><strong>波浪型</strong>：像蛇一樣扭動前進。</li>
                    </ul>
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
                        <div class="block-row indent"><span class="block b-led">取消繪製 x CoinX y CoinY</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 CoinY 改變 1</span></div>
                        <div class="block-row indent"><span class="block b-led">繪製 x CoinX y CoinY</span></div>
                        <div class="block-row indent"><span class="block b-basic">暫停 500 ms</span></div>
                    </div>
                `
            },
            {
                title: "邊界處理 (Boundary Check)",
                content: `
                    <p>如果玩家一直按右，X 會超過 4 怎麼辦？</p>
                    <div class="step-box">
                        <h3>問題與解法</h3>
                        <p>X 的範圍只能是 0~4，超過會有問題：</p>
                        <ul>
                            <li><strong>X > 4</strong>：超出右邊界 → 設回 4</li>
                            <li><strong>X < 0</strong>：超出左邊界 → 設回 0</li>
                        </ul>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 X > 4 那麼</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 X 設為 4</span></div>
                        <div class="block-row"><span class="block b-logic">如果 X < 0 那麼</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 X 設為 0</span></div>
                    </div>
                `
            },
            {
                title: "計分系統 (1/2)",
                content: `
                    <p>遊戲怎麼能沒有分數呢？</p>
                    <div class="step-box">
                        <h3>計分的時機</h3>
                        <ul>
                            <li><strong>吃到金幣</strong>：Score + 1</li>
                            <li><strong>閃過隕石</strong>：Score + 1</li>
                            <li><strong>存活時間</strong>：每秒 + 1 分</li>
                        </ul>
                    </div>
                    <p>我們需要在 <span class="block b-basic">當啟動時</span> 把 Score 設為 0。</p>
                `
            },
            {
                title: "計分系統 (2/2)",
                content: `
                    <p>什麼時候該顯示分數？</p>
                    <div class="step-box">
                        <h3>顯示時機</h3>
                        <ul>
                            <li><strong>遊戲結束時</strong>：顯示最終分數。</li>
                            <li><strong>按按鈕時</strong>：可以隨時查看。</li>
                            <li><strong>即時顯示</strong>：一直在畫面上更新 (較難)。</li>
                        </ul>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當按鈕 B 被按下</span></div>
                        <div class="block-row indent"><span class="block b-basic">顯示數字 <span class="block b-vars">Score</span></span></div>
                    </div>
                `
            },
            {
                title: "隨機數的魔法 (1/2)",
                content: `
                    <p>遊戲要好玩，就需要「不確定性」。</p>
                    <div class="step-box">
                        <h3>隨機取數積木</h3>
                        <p>在 <span class="block b-math">數學</span> 積木盒中有：</p>
                        <p><span class="block b-math">隨機取數 0 到 4</span></p>
                    </div>
                    <p>每次執行都會給你不同的數字，這讓遊戲充滿驚喜！</p>
                `
            },
            {
                title: "隨機數的魔法 (2/2)",
                content: `
                    <p>隨機數可以用在哪裡？</p>
                    <div class="step-box">
                        <h3>遊戲應用</h3>
                        <ul>
                            <li><strong>敵人位置</strong>：隨機 X = 0~4</li>
                            <li><strong>掉落速度</strong>：隨機暫停時間</li>
                            <li><strong>獎勵出現</strong>：隨機判斷是否出現</li>
                            <li><strong>方向選擇</strong>：敵人隨機左移或右移</li>
                        </ul>
                    </div>
                    <p>試試看：讓金幣每次從不同位置掉下來！</p>
                `
            },
            {
                title: "遊戲速度控制",
                content: `
                    <p>暫停的時間越短，遊戲就越快越難。</p>
                    <div class="step-box">
                        <h3>用變數控制速度</h3>
                        <ol>
                            <li>建立變數 <code>Speed</code>，一開始設為 500。</li>
                            <li>把 <span class="block b-basic">暫停</span> 的時間改成 <span class="block b-vars">Speed</span>。</li>
                            <li>每過一段時間，讓 Speed 減少一點。</li>
                        </ol>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">暫停 <span class="block b-vars">Speed</span> ms</span></div>
                    </div>
                    <p>這樣遊戲會越來越快，越來越刺激！</p>
                `
            },
            {
                title: "難度遞增系統",
                content: `
                    <p>好遊戲應該是「容易上手、難以精通」。</p>
                    <div class="step-box">
                        <h3>難度設計</h3>
                        <ul>
                            <li><strong>初期</strong>：速度慢、敵人少。</li>
                            <li><strong>中期</strong>：速度加快。</li>
                            <li><strong>後期</strong>：多個敵人、更快速度。</li>
                        </ul>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 Score > 10 那麼</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 Speed 設為 300</span></div>
                        <div class="block-row"><span class="block b-logic">如果 Score > 20 那麼</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 Speed 設為 200</span></div>
                    </div>
                `
            },
            {
                title: "遊戲結束處理 (Game Over)",
                content: `
                    <p>撞到敵人後，遊戲應該要結束。</p>
                    <div class="step-box">
                        <h3>Game Over 流程</h3>
                        <ol>
                            <li>把 GameOver 變數設為 <code>true</code>。</li>
                            <li>顯示一個 X 或骷髏頭。</li>
                            <li>暫停一下讓玩家看到。</li>
                            <li>顯示最終分數。</li>
                        </ol>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-vars">變數 GameOver 設為 真</span></div>
                        <div class="block-row"><span class="block b-basic">顯示圖示 (X)</span></div>
                        <div class="block-row"><span class="block b-basic">暫停 1000 ms</span></div>
                        <div class="block-row"><span class="block b-basic">顯示數字 <span class="block b-vars">Score</span></span></div>
                    </div>
                `
            },
            {
                title: "重新開始 (Restart)",
                content: `
                    <p>Game Over 之後，玩家會想再玩一次。</p>
                    <div class="step-box">
                        <h3>重置所有變數</h3>
                        <p>按下按鈕 A+B 或搖晃來重新開始。</p>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當姿勢 晃動 發生</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 Score 設為 0</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 Speed 設為 500</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 GameOver 設為 假</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 PlayerX 設為 2</span></div>
                        <div class="block-row indent"><span class="block b-basic">顯示圖示 (打勾)</span></div>
                    </div>
                `
            },
            {
                title: "音效 (Sound) (1/2)",
                content: `
                    <p>Micro:bit V2 有喇叭，可以發出聲音！</p>
                    <div class="step-box">
                        <h3>音樂積木</h3>
                        <ul>
                            <li><span class="block b-music">播放音效 (giggle)</span>：播放內建音效。</li>
                            <li><span class="block b-music">播放旋律 dadadum</span>：播放內建旋律。</li>
                            <li><span class="block b-music">播放音調 中央 C</span>：自訂音符。</li>
                        </ul>
                    </div>
                    <p>音效可以讓遊戲更有趣喔！</p>
                `
            },
            {
                title: "音效 (Sound) (2/2)",
                content: `
                    <p>在不同情況播放不同音效。</p>
                    <div class="step-box">
                        <h3>音效時機</h3>
                        <ul>
                            <li><strong>吃到金幣</strong>：開心的叮叮聲。</li>
                            <li><strong>撞到敵人</strong>：悲傷的聲音。</li>
                            <li><strong>遊戲開始</strong>：開場音樂。</li>
                            <li><strong>分數破紀錄</strong>：慶祝音樂。</li>
                        </ul>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-music">播放音效 (happy)</span> (吃到金幣時)</div>
                        <div class="block-row"><span class="block b-music">播放音效 (sad)</span> (Game Over 時)</div>
                    </div>
                `
            },
            {
                title: "清除畫面技巧",
                content: `
                    <p>每一幀都要先把舊的畫面清掉。</p>
                    <div class="step-box">
                        <h3>兩種方法</h3>
                        <ul>
                            <li><strong>個別清除</strong>：只關掉移動過的燈 (效率高)。</li>
                            <li><strong>全部清除</strong>：用 <span class="block b-basic">清除螢幕</span> 然後重畫。</li>
                        </ul>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">清除螢幕</span></div>
                        <div class="block-row"><span class="block b-led">繪製 x PlayerX y 4</span></div>
                        <div class="block-row"><span class="block b-led">繪製 x CoinX y CoinY</span></div>
                    </div>
                    <p>全部清除比較簡單，但畫面可能會閃爍。</p>
                `
            },
            {
                title: "練習遊戲：PONG 彈珠 (1/2)",
                content: `
                    <p>除了接金幣，我們還可以做一個經典遊戲：PONG。</p>
                    <div class="step-box">
                        <h3>遊戲規則</h3>
                        <ul>
                            <li>玩家在最下排控制一個球拍 (3 格寬)。</li>
                            <li>球會在畫面上彈來彈去。</li>
                            <li>球碰到球拍會反彈，碰到地面就 Game Over。</li>
                        </ul>
                    </div>
                    <p>這需要更複雜的碰撞計算喔！</p>
                `
            },
            {
                title: "練習遊戲：PONG 彈珠 (2/2)",
                content: `
                    <p>球的移動需要兩個變數：方向。</p>
                    <div class="step-box">
                        <h3>球的移動邏輯</h3>
                        <ul>
                            <li><strong>BallDX</strong>：X 方向 (-1 或 +1)。</li>
                            <li><strong>BallDY</strong>：Y 方向 (-1 或 +1)。</li>
                        </ul>
                        <p>碰到邊界時，改變方向的正負號。</p>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 BallX ≤ 0 或 BallX ≥ 4 那麼</span></div>
                        <div class="block-row indent"><span class="block b-vars">變數 BallDX 設為 (BallDX × -1)</span> (反彈)</div>
                    </div>
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
                    <p>還有更多進階技巧：</p>
                    <ul>
                        <li>邊界處理、計分系統、難度控制。</li>
                        <li>遊戲結束與重新開始。</li>
                        <li>音效與畫面更新。</li>
                    </ul>
                    <p>下週，我們將正式開始製作專題：<strong>銀河保衛者</strong>！</p>
                `
            }
        ]
    },
    {
        name: "第 5 週：專題 - 銀河保衛者",
        slides: [
            {
                title: "第五週：銀河保衛者",
                content: `
                    <p>歡迎來到銀河防衛隊！🚀</p>
                    <p>本週我們將製作一款完整的體感遊戲：<strong>Galaxy Dodger (太空閃避戰)</strong></p>
                    <div class="step-box">
                        <h3>遊戲規則</h3>
                        <ul>
                            <li><strong>控制</strong>：左右傾斜 Micro:bit 移動太空船</li>
                            <li><strong>目標</strong>：閃避掉落的隕石</li>
                            <li><strong>計分</strong>：每閃過一顆隕石得 1 分</li>
                            <li><strong>難度</strong>：分數越高，速度越快！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "遊戲變數設定",
                content: `
                    <p>首先，設定所有變數：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 RockX 設為</span> <span class="block b-math">隨機取數 0 到 4</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 RockY 設為 0</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 speed 設為 500</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 score 設為 0</span></div>
                    </div>
                    <div class="step-box">
                        <h3>變數說明</h3>
                        <ul>
                            <li><strong>RockX, RockY</strong>：隕石位置</li>
                            <li><strong>speed</strong>：遊戲速度（毫秒）</li>
                            <li><strong>score</strong>：自訂分數（⚠️不用內建的！）</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "體感控制：映射函數",
                content: `
                    <p>太空船用<strong>傾斜</strong>控制，需要把加速度值映射到 0~4：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-var">變數 PlayerX 設為</span> <span class="block b-math">無條件捨去</span> <span class="block b-math">對應 <span class="block b-input">加速度感測值 (mg) x</span> 從低 -512 到高 512 至低 0 到高 4</span></div>
                    </div>
                    <p>❗ 然後要加上<strong>邊界檢查</strong>，確保 PlayerX 不會超出 0~4：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-logic">如果 PlayerX > 4 那麼</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 PlayerX 設為 4</span></div>
                        <div class="block-row"><span class="block b-logic">如果 PlayerX < 0 那麼</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 PlayerX 設為 0</span></div>
                    </div>
                `
            },
            {
                title: "遊戲迴圈：繪製",
                content: `
                    <p>遊戲的核心是「重複無限次」迴圈：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-basic">清空畫面</span></div>
                        <div class="block-row indent"><span class="block b-var">PlayerX 設為</span> <span class="block b-math">無條件捨去(對應...)</span></div>
                        <div class="block-row indent"><span class="block b-logic">如果 PlayerX > 4 那麼</span> <span class="block b-var">PlayerX 設為 4</span></div>
                        <div class="block-row indent"><span class="block b-logic">如果 PlayerX < 0 那麼</span> <span class="block b-var">PlayerX 設為 0</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: PlayerX y: 4</span> ← 太空船</div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: RockX y: RockY</span> ← 隕石</div>
                    </div>
                `
            },
            {
                title: "碰撞偵測",
                content: `
                    <p>當隕石和太空船<strong>在同一格</strong>時 = 撞到！</p>
                    <div class="block-container">
                        <div class="block-row indent"><span class="block b-logic">如果 RockY = 4 且 RockX = PlayerX 那麼</span></div>
                        <div class="block-row indent indent"><span class="block b-game">得分設為</span> <span class="block b-var">score</span></div>
                        <div class="block-row indent indent"><span class="block b-game">遊戲結束</span></div>
                    </div>
                    <p>⚠️ 要先「得分設為 score」才會顯示正確分數！</p>
                `
            },
            {
                title: "暫停與移動",
                content: `
                    <p>暫停一下，然後讓隕石往下移動：</p>
                    <div class="block-container">
                        <div class="block-row indent"><span class="block b-basic">暫停</span> <span class="block b-var">speed</span> <span class="block b-basic">毫秒</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 RockY 改變 1</span></div>
                    </div>
                `
            },
            {
                title: "隕石重生 + 計分",
                content: `
                    <p>當隕石掉出螢幕 (RockY > 4)：</p>
                    <div class="block-container">
                        <div class="block-row indent"><span class="block b-logic">如果 RockY > 4 那麼</span></div>
                        <div class="block-row indent indent"><span class="block b-var">變數 score 改變 1</span></div>
                        <div class="block-row indent indent"><span class="block b-var">變數 speed 改變 -10</span> ← 加速！</div>
                        <div class="block-row indent indent"><span class="block b-var">變數 RockX 設為</span> <span class="block b-math">隨機取數 0 到 4</span></div>
                        <div class="block-row indent indent"><span class="block b-var">變數 RockY 設為 0</span></div>
                    </div>
                `
            },
            {
                title: "完整程式順序",
                content: `
                    <p>程式順序非常重要：</p>
                    <div class="block-container" style="font-size: 0.85em;">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent">① <span class="block b-basic">清空畫面</span></div>
                        <div class="block-row indent">② <span class="block b-var">PlayerX 設為...</span></div>
                        <div class="block-row indent">③ <span class="block b-logic">邊界檢查 (>4 或 <0)</span></div>
                        <div class="block-row indent">④ <span class="block b-led">點亮太空船</span></div>
                        <div class="block-row indent">⑤ <span class="block b-led">點亮隕石</span></div>
                        <div class="block-row indent">⑥ <span class="block b-logic">碰撞檢測 → 遊戲結束</span></div>
                        <div class="block-row indent">⑦ <span class="block b-basic">暫停 speed 毫秒</span></div>
                        <div class="block-row indent">⑧ <span class="block b-var">RockY 改變 1</span></div>
                        <div class="block-row indent">⑨ <span class="block b-logic">如果 RockY > 4，重生+計分</span></div>
                    </div>
                `
            },
            {
                title: "專題展示：銀河保衛者",
                content: `
                    <p>現在，試試看右邊的模擬器！</p>
                    <div class="step-box">
                        <h3>操作說明</h3>
                        <ul>
                            <li>調整 <strong>Tilt X</strong> 滑桿來移動太空船</li>
                            <li>閃避掉下來的隕石</li>
                            <li>看看你能得幾分！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "常見問題排解",
                content: `
                    <div class="step-box">
                        <h3>問題 1：沒碰到也會結束？</h3>
                        <p>確認 PlayerX 有用「無條件捨去」包住映射函數。</p>
                    </div>
                    <div class="step-box">
                        <h3>問題 2：隕石重生時有奇怪動畫？</h3>
                        <p>不要用「得分改變」，改用自訂變數「score 改變 1」。</p>
                    </div>
                    <div class="step-box">
                        <h3>問題 3：分數顯示 0？</h3>
                        <p>遊戲結束前要先「得分設為 score」。</p>
                    </div>
                `
            },
            {
                title: "第五週總結",
                content: `
                    <p>🎉 恭喜完成銀河保衛者！</p>
                    <div class="step-box">
                        <h3>本週學習重點</h3>
                        <ul>
                            <li>✓ 體感控制（加速度計 + 映射）</li>
                            <li>✓ 遊戲迴圈設計</li>
                            <li>✓ 碰撞偵測邏輯</li>
                            <li>✓ 計分與難度系統</li>
                        </ul>
                    </div>
                    <p>下週我們要學習<strong>無線電通訊</strong>，做一個雙人對戰遊戲！🏓</p>
                `
            }
        ]
    },
    {
        name: "第 6 週：專題 - 心電感應乒乓",
        slides: [
            {
                title: "第六週：心電感應乒乓 🏓",
                content: `
                    <p>本週進入<strong>雙人對戰</strong>模式！</p>
                    <p>我們要用<strong>兩台 Micro:bit</strong> 透過無線電通訊，製作一個乒乓球遊戲。</p>
                    <div class="step-box">
                        <h3>遊戲概念</h3>
                        <ul>
                            <li>每個玩家用<strong>傾斜</strong>控制自己的球拍</li>
                            <li>球會在兩台 Micro:bit 間<strong>無線傳送</strong></li>
                            <li>接不到球就輸一分！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "無線電基礎",
                content: `
                    <p>Micro:bit 內建<strong>無線電 (Radio)</strong> 功能，可以互相通訊！</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                        <div class="block-row indent"><span class="block b-input">無線電設定群組 1</span></div>
                    </div>
                    <div class="step-box">
                        <h3>重要概念</h3>
                        <ul>
                            <li><strong>群組號碼</strong>：同一組的 Micro:bit 才能通訊</li>
                            <li>群組 1~255 可選，跟別組不會互相干擾</li>
                            <li>⚠️ 兩台 Micro:bit 要設<strong>同一個群組</strong>！</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "發送與接收",
                content: `
                    <p>無線電有兩個主要動作：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">無線傳送數字</span> <span class="block b-var">數字</span> ← 發送</div>
                    </div>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當收到無線接收數字 receivedNumber</span> ← 接收</div>
                        <div class="block-row indent">... 處理收到的數字</div>
                    </div>
                    <p>我們可以用數字代表球的 X 位置！</p>
                `
            },
            {
                title: "遊戲變數設定",
                content: `
                    <p>乒乓遊戲需要這些變數：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">當啟動時</span></div>
                        <div class="block-row indent"><span class="block b-input">無線電設定群組 1</span></div>
                        <div class="block-row indent"><span class="block b-var">變數 paddleX 設為 2</span> ← 球拍位置</div>
                        <div class="block-row indent"><span class="block b-var">變數 ballX 設為 2</span> ← 球的 X</div>
                        <div class="block-row indent"><span class="block b-var">變數 ballY 設為 -1</span> ← 球的 Y（-1 表示沒球）</div>
                        <div class="block-row indent"><span class="block b-var">變數 score 設為 0</span></div>
                    </div>
                `
            },
            {
                title: "球拍控制",
                content: `
                    <p>用傾斜控制球拍（跟銀河保衛者一樣）：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-basic">重複無限次</span></div>
                        <div class="block-row indent"><span class="block b-basic">清空畫面</span></div>
                        <div class="block-row indent"><span class="block b-var">paddleX 設為</span> <span class="block b-math">無條件捨去(對應 加速度X...)</span></div>
                        <div class="block-row indent"><span class="block b-led">點亮 x: paddleX y: 4</span> ← 畫球拍</div>
                    </div>
                `
            },
            {
                title: "發球機制",
                content: `
                    <p>按 A 鍵發球給對方：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當按鈕 A 被按下</span></div>
                        <div class="block-row indent"><span class="block b-input">無線傳送數字</span> <span class="block b-var">paddleX</span></div>
                        <div class="block-row indent"><span class="block b-basic">顯示圖示 ✓</span></div>
                    </div>
                    <p>發送的數字 = 球的 X 位置（從你的球拍位置發出）</p>
                `
            },
            {
                title: "接收球",
                content: `
                    <p>當收到對方傳來的球：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當收到無線接收數字 receivedNumber</span></div>
                        <div class="block-row indent"><span class="block b-var">ballX 設為 receivedNumber</span></div>
                        <div class="block-row indent"><span class="block b-var">ballY 設為 0</span> ← 球從頂部出現</div>
                    </div>
                    <p>球會從你的螢幕頂部掉下來！</p>
                `
            },
            {
                title: "球的移動",
                content: `
                    <p>如果有球在螢幕上，讓它往下掉：</p>
                    <div class="block-container">
                        <div class="block-row indent"><span class="block b-logic">如果 ballY >= 0 那麼</span></div>
                        <div class="block-row indent indent"><span class="block b-led">點亮 x: ballX y: ballY</span></div>
                        <div class="block-row indent indent"><span class="block b-basic">暫停 300 毫秒</span></div>
                        <div class="block-row indent indent"><span class="block b-var">ballY 改變 1</span></div>
                    </div>
                `
            },
            {
                title: "接球判斷",
                content: `
                    <p>球掉到底部時，判斷有沒有接到：</p>
                    <div class="block-container">
                        <div class="block-row indent"><span class="block b-logic">如果 ballY = 4 那麼</span></div>
                        <div class="block-row indent indent"><span class="block b-logic">如果 ballX = paddleX 那麼</span></div>
                        <div class="block-row indent indent indent"><span class="block b-input">無線傳送數字 paddleX</span> ← 打回去！</div>
                        <div class="block-row indent indent"><span class="block b-logic">否則</span></div>
                        <div class="block-row indent indent indent"><span class="block b-var">score 改變 -1</span> ← 沒接到，扣分</div>
                        <div class="block-row indent indent"><span class="block b-var">ballY 設為 -1</span> ← 球消失</div>
                    </div>
                `
            },
            {
                title: "顯示分數",
                content: `
                    <p>按 B 鍵顯示目前分數：</p>
                    <div class="block-container">
                        <div class="block-row"><span class="block b-input">當按鈕 B 被按下</span></div>
                        <div class="block-row indent"><span class="block b-basic">顯示數字</span> <span class="block b-var">score</span></div>
                    </div>
                    <p>分數 > 0 表示你贏對方，< 0 表示你輸！</p>
                `
            },
            {
                title: "完整遊戲流程",
                content: `
                    <div class="step-box">
                        <h3>遊戲流程</h3>
                        <ol>
                            <li>兩台 Micro:bit 設定<strong>同一群組</strong></li>
                            <li>任一方按 <strong>A 鍵發球</strong></li>
                            <li>球從對方螢幕頂部掉下來</li>
                            <li>對方用<strong>傾斜</strong>接球</li>
                            <li>接到 → 球飛回來；沒接到 → 對方扣分</li>
                            <li>按 <strong>B 鍵</strong>看分數</li>
                        </ol>
                    </div>
                `
            },
            {
                title: "實機測試",
                content: `
                    <p>⚠️ 這個遊戲<strong>需要兩台 Micro:bit</strong> 才能測試！</p>
                    <div class="step-box">
                        <h3>測試步驟</h3>
                        <ol>
                            <li>把程式下載到<strong>兩台</strong> Micro:bit</li>
                            <li>確認群組號碼相同</li>
                            <li>一人按 A 發球</li>
                            <li>另一人傾斜接球</li>
                        </ol>
                    </div>
                    <p>💡 模擬器無法測試無線電功能！</p>
                `
            },
            {
                title: "進階挑戰",
                content: `
                    <div class="step-box">
                        <h3>挑戰 1：加入音效</h3>
                        <p>接到球時播放音效！</p>
                    </div>
                    <div class="step-box">
                        <h3>挑戰 2：隨機發球位置</h3>
                        <p>球不要從原位發出，隨機選位置！</p>
                    </div>
                    <div class="step-box">
                        <h3>挑戰 3：加速模式</h3>
                        <p>每來回一次，球掉落速度加快！</p>
                    </div>
                `
            },
            {
                title: "課程完結 🎓",
                content: `
                    <p>🎉 <strong>恭喜你完成 6 週的 Micro:bit 課程！</strong></p>
                    <div class="step-box">
                        <h3>你學會了</h3>
                        <ul>
                            <li>✓ LED 控制與動畫</li>
                            <li>✓ 按鈕與感測器輸入</li>
                            <li>✓ 變數與邏輯判斷</li>
                            <li>✓ 迴圈與遊戲設計</li>
                            <li>✓ 無線電通訊</li>
                        </ul>
                    </div>
                    <p>從點亮一顆 LED 到製作雙人對戰遊戲，你已經是 Micro:bit 達人了！🚀</p>
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
            ],
            "A": ["00100", "01010", "10001", "11111", "10001"],
            "B": ["11100", "10010", "11100", "10010", "11100"],
            "C": ["01110", "10001", "10000", "10001", "01110"],
            "D": ["11100", "10010", "10010", "10010", "11100"],
            "E": ["11111", "10000", "11110", "10000", "11111"],
            "F": ["11111", "10000", "11110", "10000", "10000"],
            "G": ["01110", "10000", "10111", "10001", "01110"],
            "H": ["10001", "10001", "11111", "10001", "10001"],
            "I": ["01110", "00100", "00100", "00100", "01110"],
            "J": ["00001", "00001", "00001", "10001", "01110"],
            "K": ["10010", "10100", "11000", "10100", "10010"],
            "L": ["10000", "10000", "10000", "10000", "11111"],
            "M": ["10001", "11011", "10101", "10001", "10001"],
            "N": ["10001", "11001", "10101", "10011", "10001"],
            "O": ["01110", "10001", "10001", "10001", "01110"],
            "P": ["11110", "10001", "11110", "10000", "10000"],
            "Q": ["01110", "10001", "10001", "10010", "01101"],
            "R": ["11110", "10001", "11110", "10100", "10010"],
            "S": ["01111", "10000", "01110", "00001", "11110"],
            "T": ["11111", "00100", "00100", "00100", "00100"],
            "U": ["10001", "10001", "10001", "10001", "01110"],
            "V": ["10001", "10001", "10001", "01010", "00100"],
            "W": ["10001", "10001", "10101", "11011", "10001"],
            "X": ["10001", "01010", "00100", "01010", "10001"],
            "Y": ["10001", "10001", "01010", "00100", "00100"],
            "Z": ["11111", "00010", "00100", "01000", "11111"],
            "GHOST": [
                "01110",
                "11111",
                "10101",
                "11111",
                "10101"
            ],
            "0": ["01110", "10001", "10001", "10001", "01110"],
            "1": ["00100", "01100", "00100", "00100", "01110"],
            "2": ["01110", "00001", "01110", "10000", "11111"],
            "3": ["11110", "00001", "01110", "00001", "11110"],
            "4": ["10010", "10010", "11110", "00010", "00010"],
            "5": ["11111", "10000", "11110", "00001", "11110"],
            "6": ["01110", "10000", "11110", "10001", "01110"],
            "7": ["11111", "00001", "00010", "00100", "00100"],
            "8": ["01110", "10001", "01110", "10001", "01110"],
            "9": ["01110", "10001", "01111", "00001", "01110"]
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

    showString(str) {
        this.stopAnimation();
        const chars = str.toString().split('');
        if (chars.length === 1) {
            this.showIcon(chars[0]);
        } else {
            let i = 0;
            this.statusElement.textContent = `顯示字串: ${str}`;
            const showNext = () => {
                if (i >= chars.length) {
                    i = 0; // Loop or just stop? MakeCode scrolls once usually, but here loop is safer for visibility
                    setTimeout(() => {
                        this.clear();
                        setTimeout(showNext, 500); // Pause before repeating
                    }, 1000);
                    return;
                }
                this.showIcon(chars[i], true); // true = preventStop to keep interval
                i++;
            };

            showNext();
            this.animationInterval = setInterval(showNext, 800); // Speed of scrolling
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
    "挑戰：圖形繪製 (1/3)": () => { // Square
        mb.clear();
        mb.statusElement.textContent = "繪製正方形";
        for (let x = 0; x < 5; x++) { mb.plot(x, 0); mb.plot(x, 4); }
        for (let y = 0; y < 5; y++) { mb.plot(0, y); mb.plot(4, y); }
    },
    "挑戰：圖形繪製 (2/3)": () => { // Triangle
        mb.clear();
        mb.statusElement.textContent = "繪製三角形";
        mb.plot(2, 0);
        mb.plot(1, 1); mb.plot(3, 1);
        mb.plot(0, 2); mb.plot(4, 2);
        for (let x = 0; x < 5; x++) mb.plot(x, 3);
    },
    "挑戰：圖形繪製 (3/3)": () => { // Chessboard
        mb.clear();
        mb.statusElement.textContent = "繪製棋盤格";
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if ((x + y) % 2 === 0) mb.plot(x, y);
            }
        }
    },
    "專題實作：流星燈 (1/3)": () => {
        mb.clear();
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
            // Simulate showing string "A"
            mb.showIcon("A");
            setTimeout(() => mb.clear(), 1000);
        };
    },
    "實作：按鈕測試 (2/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 B 鍵試試看！";
        document.getElementById('btnB').onclick = () => {
            mb.statusElement.textContent = "B 鍵被按下";
            mb.showIcon("B");
            setTimeout(() => mb.clear(), 1000);
        };
    },
    "實作：按鈕測試 (3/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "觸摸 Logo 試試看！(V2 功能)";
        const logo = document.getElementById('touchLogo');
        if (logo) {
            logo.onclick = () => {
                mb.statusElement.textContent = "Logo 被觸摸";
                mb.showIcon("GHOST");
                setTimeout(() => mb.clear(), 1000);
            };
        }
    },
    "改變數值": () => {
        mb.clear();
        let val = 0;
        mb.statusElement.textContent = "按 A 鍵加分";
        document.getElementById('btnA').onclick = () => {
            val++;
            mb.statusElement.textContent = `數值: ${val}`;
            mb.showString(val);
        };
    },
    "測試計數器": () => {
        mb.clear();
        let count = 0;
        mb.statusElement.textContent = "按 A 計數";
        document.getElementById('btnA').onclick = () => {
            count++;
            mb.statusElement.textContent = `計數: ${count}`;
            mb.showString(count);
        };
    },
    "顯示數值": () => {
        mb.clear();
        let score = 0;
        mb.statusElement.textContent = "按 A 加分 (默數)，按 B 顯示";
        document.getElementById('btnA').onclick = () => {
            score++;
            // No visual feedback as per lesson plan "psychological counting"
        };
        document.getElementById('btnB').onclick = () => {
            mb.statusElement.textContent = `Score: ${score}`;
            mb.showString(score);
        };
    },
    "進階挑戰：重置遊戲": () => {
        mb.clear();
        let count = 0;
        mb.statusElement.textContent = "按 A 加分，按 Logo 重置";

        const update = () => {
            mb.statusElement.textContent = `Count: ${count}`;
            mb.clear();
            for (let i = 0; i < Math.min(count, 25); i++) mb.plot(i % 5, Math.floor(i / 5));
        };

        document.getElementById('btnA').onclick = () => {
            count++;
            update();
        };

        const logo = document.getElementById('touchLogo');
        const mkReset = () => {
            mb.statusElement.textContent = "已重置！";
            mb.showIcon("CHECK");
            setTimeout(() => { mb.clear(); }, 500);
        };

        if (logo) logo.onclick = mkReset;

        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) shakeBtn.onclick = mkReset;
    },
    "邏輯判斷 (3/3)": () => {
        mb.clear();
        let score = 0;
        mb.statusElement.textContent = "試試看：按 A 鍵加分，加到 10 分會怎樣？";

        document.getElementById('btnA').onclick = () => {
            score++;
            if (score === 10) {
                mb.statusElement.textContent = "贏了！(Score = 10)";
                mb.showString("WIN");
            } else {
                mb.statusElement.textContent = `Score: ${score}`;
                // Optional: show number
                mb.showString(score);
            }
        };

        document.getElementById('btnB').onclick = () => {
            // Reset for convenience
            score = 0;
            mb.clear();
            mb.statusElement.textContent = "分數已重置";
        };
    },

    "進階邏輯：布林值 (Boolean) (1/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "變數 isLightOn = True (開燈)";
        mb.leds.forEach(row => row.forEach(led => led.classList.add('on')));
        setTimeout(() => {
            mb.statusElement.textContent = "變數 isLightOn = False (關燈)";
            mb.clear();
        }, 1500);
    },
    "進階邏輯：切換開關 (2/3)": () => {
        mb.clear();
        let isLightOn = false;
        mb.statusElement.textContent = "按下 A 鍵切換開關";
        document.getElementById('btnA').onclick = () => {
            isLightOn = !isLightOn;
            if (isLightOn) {
                mb.leds.forEach(row => row.forEach(led => led.classList.add('on')));
                mb.statusElement.textContent = "開燈 (True)";
            } else {
                mb.clear();
                mb.statusElement.textContent = "關燈 (False)";
            }
        };
    },
    "進階邏輯：AND 與 OR (3/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 A 或 B (OR 測試)";
        document.getElementById('btnA').onclick = () => {
            mb.showIcon("CHECK");
            mb.statusElement.textContent = "A 被按下 (符合 OR)";
            setTimeout(() => mb.clear(), 500);
        };
        document.getElementById('btnB').onclick = () => {
            mb.showIcon("CHECK");
            mb.statusElement.textContent = "B 被按下 (符合 OR)";
            setTimeout(() => mb.clear(), 500);
            mb.animationInterval = setInterval(() => {
                const light = mb.sensors.light;
                mb.statusElement.textContent = `亮度: ${light}`;
                mb.clear();
                const cols = Math.floor(light / 52); // 0-255 -> 0-5
                for (let x = 0; x < cols; x++) {
                    for (let y = 0; y < 5; y++) mb.plot(x, y);
                }
            }, 200);
        };
    },
    "光感測器 (Light Level) (1/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "調整光線滑桿觀察數值變化";
        mb.animationInterval = setInterval(() => {
            const light = mb.sensors.light;
            mb.statusElement.textContent = `目前亮度: ${light}`;
            // Show light level as bar graph
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            const cols = Math.floor(light / 52); // 0-255 -> 0-5
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < 5; y++) mb.plot(x, y);
            }
        }, 200);
    },
    "光感測器：實作 (2/3)": () => {
        mb.clear();
        mb.statusElement.textContent = "調整光線滑桿，數字會即時更新";
        mb.animationInterval = setInterval(() => {
            const light = mb.sensors.light;
            mb.statusElement.textContent = `亮度數字: ${light}`;
            // Clear LEDs without stopping animation
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            // Show as bar graph (always works, no stopAnimation call)
            const cols = Math.floor(light / 52); // 0-255 -> 0-5
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < 5; y++) mb.plot(x, y);
            }
        }, 200);
    },
    "光感測器：小夜燈 (3/3)": () => {
        mb.statusElement.textContent = "若是天黑 (<50) 自動亮燈";
        // Heart pattern
        const heartPattern = [
            "01010",
            "11111",
            "11111",
            "01110",
            "00100"
        ];
        mb.animationInterval = setInterval(() => {
            const light = mb.sensors.light;
            // Clear LEDs without calling stopAnimation
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            if (light < 50) {
                // Draw heart directly
                heartPattern.forEach((row, y) => {
                    for (let x = 0; x < 5; x++) {
                        if (row[x] === '1') mb.plot(x, y);
                    }
                });
                mb.statusElement.textContent = `亮度 ${light} (<50): 開燈 ❤️`;
            } else {
                mb.statusElement.textContent = `亮度 ${light} (>=50): 關燈`;
            }
        }, 200);
    },
    "溫度感測器 (Temperature)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 A 鍵測溫";
        document.getElementById('btnA').onclick = () => {
            const temp = mb.sensors.temperature;
            mb.statusElement.textContent = `溫度: ${temp}°C`;
            // Simple visual: height based on temp
            mb.clear();
            const h = Math.floor(temp / 10);
            for (let y = 4; y >= 4 - h && y >= 0; y--) mb.plot(2, y);
        };
    },
    "加速度計：實作 (3/4)": () => {
        mb.clear();
        mb.statusElement.textContent = "向右傾斜看看 (Tilt X > 200)";
        mb.animationInterval = setInterval(() => {
            const x = mb.sensors.acceleration.x;
            if (x > 200) {
                mb.clear();
                // Arrow Right
                mb.plot(2, 0); mb.plot(3, 1); mb.plot(4, 2); mb.plot(3, 3); mb.plot(2, 4);
                mb.plot(0, 2); mb.plot(1, 2);
                mb.statusElement.textContent = `X=${x} (向右)`;
            } else {
                mb.clear();
                mb.statusElement.textContent = `X=${x}`;
            }
        }, 200);
    },
    "加速度計：多重判斷 (4/4)": () => {
        mb.clear();
        mb.statusElement.textContent = "左右傾斜 (Tilt X)";
        mb.animationInterval = setInterval(() => {
            const x = mb.sensors.acceleration.x;
            mb.clear();
            if (x > 200) {
                // Arrow Right
                mb.plot(2, 0); mb.plot(3, 1); mb.plot(4, 2); mb.plot(3, 3); mb.plot(2, 4);
                mb.plot(0, 2); mb.plot(1, 2);
            } else if (x < -200) {
                // Arrow Left
                mb.plot(2, 0); mb.plot(1, 1); mb.plot(0, 2); mb.plot(1, 3); mb.plot(2, 4);
                mb.plot(4, 2); mb.plot(3, 2);
            } else {
                // Dot
                mb.plot(2, 2);
            }
            mb.statusElement.textContent = `X=${x}`;
        }, 200);
    },
    "電子羅盤：實作 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "調整 Compass 滑桿";
        mb.animationInterval = setInterval(() => {
            const deg = mb.sensors.compass;
            mb.clear();
            if (deg < 45 || deg > 315) {
                // Draw N
                mb.plot(0, 4); mb.plot(0, 3); mb.plot(0, 2); mb.plot(0, 1); mb.plot(0, 0);
                mb.plot(1, 1); mb.plot(2, 2); mb.plot(3, 3);
                mb.plot(4, 4); mb.plot(4, 3); mb.plot(4, 2); mb.plot(4, 1); mb.plot(4, 0);
                mb.statusElement.textContent = `方位: ${deg} (北方)`;
            } else {
                mb.statusElement.textContent = `方位: ${deg}`;
            }
        }, 200);
    },
    "課堂挑戰：實作提示 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "電子水平儀 (點點跟著動)";
        mb.animationInterval = setInterval(() => {
            mb.clear();
            const ax = mb.sensors.acceleration.x;
            const ay = mb.sensors.acceleration.y;

            // Simplified Mapping for visual stability
            let x = 2;
            if (ax > 300) x = 4;
            else if (ax > 100) x = 3;
            else if (ax < -300) x = 0;
            else if (ax < -100) x = 1;

            let y = 2;
            if (ay > 300) y = 4;
            else if (ay > 100) y = 3;
            else if (ay < -300) y = 0;
            else if (ay < -100) y = 1;

            mb.plot(x, y);
            mb.statusElement.textContent = `X:${ax} Y:${ay} -> (${x},${y})`;
        }, 100);
    },
    "專題加碼：電子骰子 V2 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "試著搖晃 Micro:bit！(按 Shake)";

        const shakeAction = () => {
            mb.clear();
            let roll = Math.floor(Math.random() * 6) + 1;
            mb.statusElement.textContent = `搖晃！點數：${roll}`;

            // Show dice pattern
            if (roll % 2 !== 0) mb.plot(2, 2);
            if (roll > 1) { mb.plot(0, 0); mb.plot(4, 4); }
            if (roll > 3) { mb.plot(4, 0); mb.plot(0, 4); }
            if (roll === 6) { mb.plot(0, 2); mb.plot(4, 2); }
        };

        // Bind Logo (V2 Style)
        const logo = document.getElementById('touchLogo');
        if (logo) logo.onclick = shakeAction;

        // Bind Shake Button (Explicit UI)
        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) shakeBtn.onclick = shakeAction;
    },
    "專題加碼：電子骰子 V2 (2/2)": () => {
        mb.clear();
        let dice = 3;
        const showDice = (val) => {
            mb.clear();
            mb.statusElement.textContent = `作弊模式 - 目前點數：${val}`;
            if (val % 2 !== 0) mb.plot(2, 2);
            if (val > 1) { mb.plot(0, 0); mb.plot(4, 4); }
            if (val > 3) { mb.plot(4, 0); mb.plot(0, 4); }
            if (val === 6) { mb.plot(0, 2); mb.plot(4, 2); }
        };
        showDice(dice);

        document.getElementById('btnA').onclick = () => {
            if (dice < 6) dice++;
            showDice(dice);
        };
        document.getElementById('btnB').onclick = () => {
            if (dice > 1) dice--;
            showDice(dice);
        };
    },
    "挑戰：雙人計分板 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "A隊: 左邊 / B隊: 右邊";
        mb.plot(0, 2); // Team A indicator
        mb.plot(4, 2); // Team B indicator
    },
    "挑戰：雙人計分板 (2/2)": () => {
        mb.clear();
        let scoreA = 0;
        let scoreB = 0;
        let gameOver = false;
        mb.statusElement.textContent = "比賽開始！誰先按滿 10 下就贏！(A vs B)";

        const checkWin = () => {
            if (scoreA >= 10) {
                mb.statusElement.textContent = "A 隊獲勝！ (按 Logo 重來)";
                mb.showString("A WIN");
                gameOver = true;
            } else if (scoreB >= 10) {
                mb.statusElement.textContent = "B 隊獲勝！ (按 Logo 重來)";
                mb.showString("B WIN");
                gameOver = true;
            }
        };

        document.getElementById('btnA').onclick = () => {
            if (gameOver) return;
            scoreA++;
            mb.statusElement.textContent = `A: ${scoreA}  B: ${scoreB}`;
            // Visual feedback: simple fill from bottom left
            if (scoreA <= 5) mb.plot(0, 5 - scoreA);
            else mb.plot(1, 5 - (scoreA - 5));
            checkWin();
        };
        document.getElementById('btnB').onclick = () => {
            if (gameOver) return;
            scoreB++;
            mb.statusElement.textContent = `A: ${scoreA}  B: ${scoreB}`;
            // Visual feedback: simple fill from bottom right
            if (scoreB <= 5) mb.plot(4, 5 - scoreB);
            else mb.plot(3, 5 - (scoreB - 5));
            checkWin();
        };

        const logo = document.getElementById('touchLogo');
        if (logo) {
            logo.onclick = () => {
                // Reset
                scoreA = 0;
                scoreB = 0;
                gameOver = false;
                mb.clear();
                mb.statusElement.textContent = "比賽重置！開始！";
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
    "小遊戲：接金幣 (2/3)": () => {
        mb.clear();
        let coinY = 0;
        mb.plot(2, coinY);
        mb.statusElement.textContent = "金幣掉落動畫";
        mb.animationInterval = setInterval(() => {
            mb.clear();
            mb.plot(2, coinY);
            coinY++;
            if (coinY > 4) coinY = 0;
        }, 500);
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
        mb.statusElement.textContent = "調整 Tilt X 滑桿來控制";
        mb.animationInterval = setInterval(() => {
            // Clear LEDs without stopping animation
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            // Map -512~512 to 0~4 (more practical range for real Micro:bit)
            const tiltX = mb.sensors.acceleration.x;
            // Formula: map(x, -512, 512, 0, 4)
            let playerX = Math.round((tiltX + 512) * 4 / 1024);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;

            mb.plot(playerX, 4);
            mb.statusElement.textContent = `Tilt: ${tiltX} -> X: ${playerX}`;
        }, 100);
    },
    "實作：加入隕石": () => {
        mb.statusElement.textContent = "太空船 + 隕石一起運作";
        let rockX = Math.floor(Math.random() * 5);
        let rockY = 0;
        mb.animationInterval = setInterval(() => {
            // Clear LEDs without calling stopAnimation
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));

            // Draw player (read from sensor)
            const tiltX = mb.sensors.acceleration.x;
            let playerX = Math.round((tiltX + 512) * 4 / 1024);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;
            mb.plot(playerX, 4);

            // Draw meteor
            mb.plot(rockX, rockY);

            // Move meteor
            rockY++;
            if (rockY > 4) {
                rockY = 0;
                rockX = Math.floor(Math.random() * 5);
            }

            mb.statusElement.textContent = `太空船X: ${playerX}, 隕石: (${rockX}, ${rockY})`;
        }, 500);
    },
    // --- Week 6 Actions (Full Game) ---
    "專題展示：銀河保衛者": () => {
        mb.statusElement.textContent = "遊戲開始！調整 Tilt X 閃避";

        let score = 0;
        let rockX = Math.floor(Math.random() * 5);
        let rockY = 0;
        let speed = 500;
        let isGameOver = false;

        const gameLoop = () => {
            if (isGameOver) return;

            // 1. Clear screen
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));

            // 2. Calculate PlayerX (using -512 to 512 mapping with floor)
            const tiltX = mb.sensors.acceleration.x;
            let playerX = Math.floor((tiltX + 512) * 5 / 1024);
            if (playerX < 0) playerX = 0;
            if (playerX > 4) playerX = 4;

            // 3. Draw player
            mb.plot(playerX, 4);

            // 4. Draw rock
            mb.plot(rockX, rockY);

            // 5. Collision check (BEFORE movement)
            if (rockY === 4 && rockX === playerX) {
                isGameOver = true;
                mb.statusElement.textContent = `GAME OVER! 分數: ${score}`;
                // Show sad face
                const sadPattern = ["00000", "01010", "00000", "01110", "10001"];
                mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
                sadPattern.forEach((row, y) => {
                    for (let x = 0; x < 5; x++) {
                        if (row[x] === '1') mb.plot(x, y);
                    }
                });
                return;
            }

            // 6. Schedule next frame with current speed
            mb.animationInterval = setTimeout(() => {
                // 7. Move rock
                rockY++;

                // 8. Reset rock if out of bounds
                if (rockY > 4) {
                    score++;
                    speed = Math.max(100, speed - 10); // Speed up, min 100ms
                    rockX = Math.floor(Math.random() * 5);
                    rockY = 0;
                }

                mb.statusElement.textContent = `分數: ${score} | 速度: ${speed}ms`;
                gameLoop(); // Continue game loop
            }, speed);
        };

        // Start the game
        gameLoop();
    },

    // --- New Week 3 Slides ---
    "溫度感測器：實作 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "按下 A 鍵顯示溫度";
        document.getElementById('btnA').onclick = () => {
            const temp = mb.sensors.temperature;
            mb.statusElement.textContent = `溫度: ${temp}°C`;
            mb.showString(temp);
        };
    },
    "溫度感測器：實作 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "調整溫度滑桿，觀察變化";
        mb.animationInterval = setInterval(() => {
            const temp = mb.sensors.temperature;
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            if (temp > 30) {
                // Fire pattern
                mb.plot(2, 4); mb.plot(1, 3); mb.plot(2, 3); mb.plot(3, 3);
                mb.plot(0, 2); mb.plot(2, 2); mb.plot(4, 2);
                mb.plot(1, 1); mb.plot(3, 1); mb.plot(2, 0);
                mb.statusElement.textContent = `${temp}°C - 太熱了！🔥`;
            } else {
                // Draw happy face directly (avoid showIcon which calls stopAnimation)
                mb.plot(1, 1); mb.plot(3, 1); // eyes
                mb.plot(0, 3); mb.plot(4, 3); // mouth corners
                mb.plot(1, 4); mb.plot(2, 4); mb.plot(3, 4); // mouth
                mb.statusElement.textContent = `${temp}°C - 舒適 😊`;
            }
        }, 300);
    },
    "搖晃感測器 (Shake) (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "按 Shake 按鈕搖骰子！";
        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                const roll = Math.floor(Math.random() * 6) + 1;
                mb.statusElement.textContent = `骰子結果: ${roll}`;
                mb.showString(roll);
            };
        }
    },
    "搖晃感測器 (Shake) (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "改良版骰子 - 按 Shake";
        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                mb.showString("?");
                mb.statusElement.textContent = "骰子滾動中...";
                setTimeout(() => {
                    const roll = Math.floor(Math.random() * 6) + 1;
                    mb.statusElement.textContent = `結果: ${roll}`;
                    mb.showString(roll);
                }, 500);
            };
        }
    },
    "手勢偵測 (Gestures)": () => {
        mb.clear();
        mb.statusElement.textContent = "試試不同手勢 (Shake, Logo)";
        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                mb.showIcon("CHECK");
                mb.statusElement.textContent = "搖動偵測！";
            };
        }
        const logo = document.getElementById('touchLogo');
        if (logo) {
            logo.onclick = () => {
                mb.showIcon("GHOST");
                mb.statusElement.textContent = "Logo 觸摸！";
            };
        }
    },
    "感測器組合應用 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "智慧夜燈：光線<50 + 搖晃 = 開燈";
        let isLightOn = false;
        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                const light = mb.sensors.light;
                if (light < 50) {
                    isLightOn = !isLightOn;
                    if (isLightOn) {
                        mb.leds.forEach(row => row.forEach(led => led.classList.add('on')));
                        mb.statusElement.textContent = `光線${light} - 開燈！`;
                    } else {
                        mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
                        mb.statusElement.textContent = `光線${light} - 關燈`;
                    }
                } else {
                    mb.statusElement.textContent = `光線${light} - 太亮了，不需要燈`;
                }
            };
        }
    },
    "感測器組合應用 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "害羞模式：調整光線和搖晃";
        const shakeBtn = document.getElementById('btnShake');
        mb.animationInterval = setInterval(() => {
            const light = mb.sensors.light;
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            if (light > 150) {
                // Shy face - eyes looking away
                mb.plot(0, 1); mb.plot(4, 1);
                mb.plot(1, 3); mb.plot(2, 3); mb.plot(3, 3);
                mb.statusElement.textContent = `光線${light} - 害羞 😳`;
            } else {
                // Draw happy face directly
                mb.plot(1, 1); mb.plot(3, 1); // eyes
                mb.plot(0, 3); mb.plot(4, 3); // mouth corners
                mb.plot(1, 4); mb.plot(2, 4); mb.plot(3, 4); // mouth
                mb.statusElement.textContent = `光線${light} - 開心 😊`;
            }
        }, 300);
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
                // Surprised face
                mb.plot(1, 1); mb.plot(3, 1);
                mb.plot(2, 3);
                mb.statusElement.textContent = "驚訝！😮";
            };
        }
    },
    "專題實作：動態溫度計 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "溫度計：調整溫度滑桿";
    },
    "專題實作：動態溫度計 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "動態溫度計 - 調整溫度滑桿";
        mb.animationInterval = setInterval(() => {
            const temp = mb.sensors.temperature;
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));
            if (temp <= 15) {
                // Snowflake
                mb.plot(2, 0); mb.plot(2, 4);
                mb.plot(0, 2); mb.plot(4, 2);
                mb.plot(1, 1); mb.plot(3, 1); mb.plot(1, 3); mb.plot(3, 3);
                mb.plot(2, 2);
                mb.statusElement.textContent = `${temp}°C - 好冷 ❄️`;
            } else if (temp <= 25) {
                // Draw happy face directly
                mb.plot(1, 1); mb.plot(3, 1); // eyes
                mb.plot(0, 3); mb.plot(4, 3); // mouth corners
                mb.plot(1, 4); mb.plot(2, 4); mb.plot(3, 4); // mouth
                mb.statusElement.textContent = `${temp}°C - 舒適 😊`;
            } else {
                // Sun
                mb.plot(2, 2);
                mb.plot(2, 0); mb.plot(2, 4); mb.plot(0, 2); mb.plot(4, 2);
                mb.plot(0, 0); mb.plot(4, 0); mb.plot(0, 4); mb.plot(4, 4);
                mb.statusElement.textContent = `${temp}°C - 好熱 🔥`;
            }
        }, 300);
    },

    // --- New Week 4 Slides ---
    "邊界處理 (Boundary Check)": () => {
        mb.clear();
        let x = 2;
        mb.plot(x, 2);
        mb.statusElement.textContent = "按 A/B 移動，會碰到邊界";
        document.getElementById('btnA').onclick = () => {
            mb.unplot(x, 2);
            x--;
            if (x < 0) x = 0; // Boundary check
            mb.plot(x, 2);
            mb.statusElement.textContent = `X = ${x}${x === 0 ? ' (碰到左邊界!)' : ''}`;
        };
        document.getElementById('btnB').onclick = () => {
            mb.unplot(x, 2);
            x++;
            if (x > 4) x = 4; // Boundary check
            mb.plot(x, 2);
            mb.statusElement.textContent = `X = ${x}${x === 4 ? ' (碰到右邊界!)' : ''}`;
        };
    },
    "計分系統 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "計分時機展示";
        mb.plot(2, 2); // Coin
        mb.plot(2, 4); // Player
    },
    "計分系統 (2/2)": () => {
        mb.clear();
        let score = 0;
        mb.statusElement.textContent = "按 A 得分，按 B 顯示分數";
        document.getElementById('btnA').onclick = () => {
            score++;
            mb.showIcon("CHECK");
            mb.statusElement.textContent = `+1 分！`;
            setTimeout(() => mb.clear(), 300);
        };
        document.getElementById('btnB').onclick = () => {
            mb.showString(score);
            mb.statusElement.textContent = `目前分數: ${score}`;
        };
    },
    "隨機數的魔法 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "按 A 產生隨機數 0~4";
        document.getElementById('btnA').onclick = () => {
            const rand = Math.floor(Math.random() * 5);
            mb.clear();
            mb.plot(rand, 2);
            mb.statusElement.textContent = `隨機結果: ${rand}`;
        };
    },
    "隨機數的魔法 (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "金幣隨機掉落";
        let coinX = Math.floor(Math.random() * 5);
        let coinY = 0;
        mb.animationInterval = setInterval(() => {
            mb.clear();
            mb.plot(coinX, coinY);
            coinY++;
            if (coinY > 4) {
                coinY = 0;
                coinX = Math.floor(Math.random() * 5);
                mb.statusElement.textContent = `新金幣出現在 X=${coinX}`;
            }
        }, 400);
    },
    "遊戲速度控制": () => {
        mb.clear();
        let speed = 500;
        let y = 0;
        mb.statusElement.textContent = `Speed: ${speed}ms - 按 A 加速`;

        const animate = () => {
            mb.animationInterval = setInterval(() => {
                mb.clear();
                mb.plot(2, y);
                y++;
                if (y > 4) y = 0;
            }, speed);
        };
        animate();

        document.getElementById('btnA').onclick = () => {
            if (speed > 100) {
                speed -= 100;
                clearInterval(mb.animationInterval);
                animate();
                mb.statusElement.textContent = `Speed: ${speed}ms - 更快了！`;
            }
        };
    },
    "難度遞增系統": () => {
        mb.clear();
        let score = 0;
        let speed = 500;
        let y = 0;
        mb.statusElement.textContent = "按 A 得分，分數越高速度越快";

        const animate = () => {
            mb.animationInterval = setInterval(() => {
                mb.clear();
                mb.plot(2, y);
                y++;
                if (y > 4) y = 0;
            }, speed);
        };
        animate();

        document.getElementById('btnA').onclick = () => {
            score++;
            if (score > 10 && speed > 300) {
                speed = 300;
                clearInterval(mb.animationInterval);
                animate();
            } else if (score > 20 && speed > 200) {
                speed = 200;
                clearInterval(mb.animationInterval);
                animate();
            }
            mb.statusElement.textContent = `Score: ${score}, Speed: ${speed}ms`;
        };
    },
    "遊戲結束處理 (Game Over)": () => {
        mb.clear();
        mb.statusElement.textContent = "按 A 模擬撞到敵人";
        document.getElementById('btnA').onclick = () => {
            mb.showIcon("SAD");
            mb.statusElement.textContent = "GAME OVER!";
            setTimeout(() => {
                mb.showString("5"); // Show score
                mb.statusElement.textContent = "最終分數: 5";
            }, 1000);
        };
    },
    "重新開始 (Restart)": () => {
        mb.clear();
        let gameOver = true;
        mb.showIcon("SAD");
        mb.statusElement.textContent = "Game Over - 按 Shake 重新開始";

        const shakeBtn = document.getElementById('btnShake');
        if (shakeBtn) {
            shakeBtn.onclick = () => {
                gameOver = false;
                mb.showIcon("CHECK");
                mb.statusElement.textContent = "遊戲重置！準備開始！";
                setTimeout(() => {
                    mb.clear();
                    mb.plot(2, 4); // Player back
                }, 500);
            };
        }
    },
    "音效 (Sound) (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "模擬音效 - 按 A 播放開心音效";
        document.getElementById('btnA').onclick = () => {
            mb.showIcon("HAPPY");
            mb.statusElement.textContent = "🎵 播放音效: Happy!";
        };
    },
    "音效 (Sound) (2/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "按 A = 開心音效, 按 B = 傷心音效";
        document.getElementById('btnA').onclick = () => {
            mb.showIcon("HAPPY");
            mb.statusElement.textContent = "🎵 Happy! (吃到金幣)";
        };
        document.getElementById('btnB').onclick = () => {
            mb.showIcon("SAD");
            mb.statusElement.textContent = "🎵 Sad... (Game Over)";
        };
    },
    "清除畫面技巧": () => {
        mb.clear();
        let playerX = 2;
        let coinY = 0;
        mb.statusElement.textContent = "全部清除再重畫";

        mb.animationInterval = setInterval(() => {
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on'))); // Clear all
            mb.plot(playerX, 4); // Redraw player
            mb.plot(2, coinY); // Redraw coin
            coinY++;
            if (coinY > 4) coinY = 0;
        }, 300);

        document.getElementById('btnA').onclick = () => {
            if (playerX > 0) playerX--;
        };
        document.getElementById('btnB').onclick = () => {
            if (playerX < 4) playerX++;
        };
    },
    "練習遊戲：PONG 彈珠 (1/2)": () => {
        mb.clear();
        mb.statusElement.textContent = "PONG 遊戲概念展示";
        // Draw paddle
        mb.plot(1, 4); mb.plot(2, 4); mb.plot(3, 4);
        // Draw ball
        mb.plot(2, 2);
    },
    "練習遊戲：PONG 彈珠 (2/2)": () => {
        mb.clear();
        let ballX = 2, ballY = 1;
        let ballDX = 1, ballDY = 1;
        let paddleX = 1;
        mb.statusElement.textContent = "按 A/B 移動球拍";

        mb.animationInterval = setInterval(() => {
            mb.leds.forEach(row => row.forEach(led => led.classList.remove('on')));

            // Draw paddle
            for (let i = 0; i < 3; i++) {
                if (paddleX + i >= 0 && paddleX + i <= 4) {
                    mb.plot(paddleX + i, 4);
                }
            }

            // Move ball
            ballX += ballDX;
            ballY += ballDY;

            // Bounce off walls
            if (ballX <= 0 || ballX >= 4) ballDX *= -1;
            if (ballY <= 0) ballDY *= -1;

            // Bounce off paddle
            if (ballY >= 3 && ballX >= paddleX && ballX <= paddleX + 2) {
                ballDY *= -1;
                mb.statusElement.textContent = "反彈！";
            }

            // Game over
            if (ballY > 4) {
                ballY = 1;
                ballX = 2;
                mb.statusElement.textContent = "球掉了！重來";
            }

            mb.plot(ballX, ballY);
        }, 350);

        document.getElementById('btnA').onclick = () => {
            if (paddleX > 0) paddleX--;
        };
        document.getElementById('btnB').onclick = () => {
            if (paddleX < 2) paddleX++;
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
