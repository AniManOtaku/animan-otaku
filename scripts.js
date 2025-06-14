    
    
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
        
        function updatePlayers(){
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
        
        window.addEventListener('DOMContentLoaded', updatePlayers);
        window.addEventListener('orientationchange', updatePlayers);
        window.addEventListener('resize', updatePlayers);
        
        audio.addEventListener('play', updatePlayers);
        audio.addEventListener('pause', updatePlayers);
        audio.addEventListener('ended' , updatePlayers);
        
        function togglePlay(){
            if(audio.paused){
                audio.currentTime=0;
                audio.play();
            }
            else {
                audio.pause();
            }
        }
        
        
