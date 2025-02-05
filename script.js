const loveJourney = document.getElementById('loveJourney');
        const journeySteps = document.getElementById('journeySteps');
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const finalMessage = document.getElementById('finalMessage');

        loveJourney.addEventListener('click', () => {
            loveJourney.classList.add('flipped');
            setTimeout(() => {
                journeySteps.style.display = 'flex';
                animateSteps();
            }, 500);
        });

        function animateSteps() {
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 1000);
            });
        }

        yesBtn.addEventListener('click', () => {
            journeySteps.style.display = 'none';
            finalMessage.style.display = 'block';
        });

        noBtn.addEventListener('mouseover', () => {
            noBtn.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
        });