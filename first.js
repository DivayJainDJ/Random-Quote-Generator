const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "Do something today that your future self will thank you for. — Sean Patrick Flanery",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Anonymous",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Dream big and dare to fail. — Norman Vaughan",
    "Act as if what you do makes a difference. It does. — William James",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
    "If you want to achieve greatness stop asking for permission. — Anonymous",
    "Push yourself, because no one else is going to do it for you. — Anonymous",
    "The secret of getting ahead is getting started. — Mark Twain",
    "Great things never come from comfort zones. — Anonymous",
    "Success doesn’t just find you. You have to go out and get it. — Anonymous",
    "Don’t limit your challenges. Challenge your limits. — Anonymous",
    "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
    "Hustle in silence and let your success make the noise. — Anonymous",
    "Don’t stop when you’re tired. Stop when you’re done. — Anonymous",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "If you can dream it, you can do it. — Walt Disney",
    "Small progress is still progress. — Anonymous",
    "Your only limit is your mind. — Anonymous",
    "Make each day your masterpiece. — John Wooden",
    "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford"
  ];
  
  const button=document.querySelector('button');
  const quote=document.querySelector('h1');
  button.addEventListener('click',()=>{
        const index=Math.floor(Math.random()*quotes.length);
        quote.textContent = quotes[index];
  })