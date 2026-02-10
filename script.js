$(document).ready(function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const bearImg = document.getElementById('bear-img');
    const mainContainer = document.getElementById('mainContainer');
    const contentStep1 = document.getElementById('contentStep1');
    const contentStep2 = document.getElementById('contentStep2');
    const secondMessage = document.getElementById('secondMessage');

    let yesSize = 1;
    const noTexts = ["Ơ kìa...", "Suy nghĩ lại điii!", "Hông bé ơiii!", "Bấm Yes đi màaa!", "Chắc chưaaa?"];
    let noCount = 0;

    noBtn.addEventListener('click', () => {
        yesSize += 0.5;
        yesBtn.style.transform = `scale(${yesSize})`;
        if (noCount < noTexts.length) {
            noBtn.innerText = noTexts[noCount];
            noCount++;
        } else {
            noBtn.style.display = 'none';
        }
    });

    yesBtn.addEventListener('click', () => {
        var music = document.getElementById('bgMusic');
        music.volume = 0.5; // Chỉnh âm lượng (0.0 - 1.0)
        music.play();
        
        // Step 1
        question.innerText = "Cảm ơn em vì đã đến bên anh nhé 🥰";
        bearImg.src = "thanks.gif";
        document.getElementById('mainButtons').style.display = 'none';

        setTimeout(() => {
            contentStep1.classList.add('fade-out');

            // Step 2
            setTimeout(() => {
                contentStep1.style.display = 'none';
                mainContainer.classList.add('shrink-mode');

                setTimeout(() => {
                    contentStep2.style.display = 'block';
                    setTimeout(() => {
                        secondMessage.style.opacity = '1';
                    }, 50);

                    // Step 3
                    setTimeout(() => {
                        secondMessage.style.opacity = '0';

                        setTimeout(() => {
                            mainContainer.classList.add('close-box');
                            setTimeout(() => {
                                mainContainer.style.display = 'none';
                                const envelopeContainer = document.getElementById('envelopeContainer');
                                envelopeContainer.style.display = 'flex';
                                setTimeout(() => {
                                    envelopeContainer.classList.add('fly-up');
                                }, 50);
                            }, 1000);
                        }, 1000);        
                    }, 7800); //chỉnh thời lượng "anh có điều này muốn nói với em"
                }, 800);
            }, 500);
        }, 5000); //chỉnh thời lượng "cảm ơn em đã đến bên anh"
    });

    // --- LOGIC PHONG BÌ & POPUP ---
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var finalPopup = $("#finalPopup");
    var isOpened = false;

    envelope.click(function () { openEnvelope(); });
    btn_open.click(function () { openEnvelope(); });
    btn_reset.click(function () { closeEnvelope(); });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        
        if (!isOpened) {
            isOpened = true; 
            
            // Đợi 5 giây (5000ms) sau đó hiện popup
            setTimeout(function() {
                finalPopup.addClass("show");
            }, 5000);
        }
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }
});