    
    function adjustHeights(){
        const screens=document.querySelectorAll('.screen');
        const aboutRuPortrait=document.getElementById('about-ru-portrait');
        const aboutRuHorizontal=document.getElementById('about-ru-horizontal');
        /*
        screens.forEach(screen=>{
                screen.style.height='100vh';
        });
        
        aboutRuPortrait.style.height='100vh';
        aboutRuPortrait.style.border='5px solid red';
        aboutRuHorizontal.style.height='100vh';*/
    }
    
    window.addEventListener ('resize', adjustHeights);
    
    function showScreen(screenId){
        
        const screens=document.querySelectorAll('.active');
            screens.forEach(screen=>{
                screen.classList.remove('active');
                screen.classList.add('hidden');
            });
        const target=document.getElementById(screenId);
        target.classList.remove('hidden');
        target.classList.add('active');
        target.scrollTop=0;
        }
        
        
        const images=document.querySelectorAll('.cover-image');
        const buttons=document.querySelectorAll('.play-button');
        const audio=document.getElementById('audio');
        
        function initPlayers(){
        
            if(audio.paused){
                audio.currentTime=0;
                images.forEach(img => {
                img.classList.add('paused');
                });
                buttons.forEach(but => {
                but.classList.add('paused');
                });
            }
            else {
                images.forEach(img => {
                img.classList.remove('paused');
                });
                buttons.forEach(but => {
                but.classList.remove('paused');
                });
            }
        }
        
        window.addEventListener ('DOMContentLoaded', initPlayers);
        window.addEventListener ('orientationchange', initPlayers);
        window.addEventListener ('resize', initPlayers);
        
        function togglePlay(){
            if(audio.paused){
                audio.currentTime=0;
                audio.play();
                images.forEach(img => {
                img.classList.remove('paused');
                });
                buttons.forEach(but => {
                but.classList.remove('paused');
                });
            }
            else {
                audio.pause();
                
                images.forEach(img => {
                img.classList.add('paused');
                });
                buttons.forEach(but => {
                but.classList.add('paused');
                });
            }
        }
        
        audio.addEventListener('ended' , () => {
            audio.CurrentTime=0;
            images.forEach(img => {
                img.classList.add('paused');
            });
            buttons.forEach(but => {
                but.classList.add('paused');
            });
        });
