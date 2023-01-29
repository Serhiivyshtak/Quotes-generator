const quotes = [
    {
        quoteText: '"The journey of a thousand miles begins with one step."',
        famousPerson: 'Lao Tzu'
    }
    , {
        quoteText: '"That which does not kill us makes us stronger."',
        famousPerson: 'Friedrich Nietzsche'
    }
    , {
        quoteText: '"You must be the change you wish to see in the world."',
        famousPerson: 'Mahatma Gandhi'
    }
    , {
        quoteText: '"You only live once, but if you do it right, once is enough."',
        famousPerson: 'Mae West'
    }
    , {
        quoteText: '"If you’re going through hell, keep going."',
        famousPerson: 'Winston Churchill'
    }
    , {
        quoteText: '"Strive not to be a success, but rather to be of value."',
        famousPerson: 'Albert Einstein'
    }
    , {
        quoteText: '"Great minds discuss ideas; average minds discuss events; small minds discuss people."',
        famousPerson: 'Eleanor Roosevelt'
    }
    , {
        quoteText: '"Those who dare to fail miserably can achieve greatly."',
        famousPerson: 'John F. Kennedy'
    }
    , {
        quoteText: '"The opposite of love is not hate; it’s indifference."',
        famousPerson: 'Elie Wiesel'
    }
    , {
        quoteText: '"Never let the fear of striking out keep you from playing the game."',
        famousPerson: 'Babe Ruth'
    }
    , {
        quoteText: '"Life is like a box of chocolates. You never know what you’re going to get."',
        famousPerson: 'Forrest Gump'
    }
    , {
        quoteText: '"He that falls in love with himself will have no rivals."',
        famousPerson: 'Benjamin Franklin'
    }
    , {
        quoteText: '"Life is ten percent what happens to you and ninety percent how you respond to it."',
        famousPerson: 'Charles Swindoll'
    }
    , {
        quoteText: '"Dream big and dare to fail."',
        famousPerson: 'Norman Vaughan'
    }
    , {
        quoteText: '"A great man is always willing to be little."',
        famousPerson: 'Ralph Waldo Emerson'
    }
    , {
        quoteText: '"That’s one small step for a man, one giant leap for mankind."',
        famousPerson: 'Neil Armstrong'
    }, {
        quoteText: '"Every man is guilty of all the good he did not do."',
        famousPerson: 'Voltaire'
    }
    , {
        quoteText: '"In three words I can sum up everything I’ve learned about life: It goes on."',
        famousPerson: 'Robert Frost'
    }
    , {
        quoteText: '"If you judge people, you have no time to love them."',
        famousPerson: 'Mother Teresa'
    }
    , {
        quoteText: '"The future belongs to those who prepare for it today."',
        famousPerson: 'Malcolm X'
    }
    , {
        quoteText: '"Don’t be afraid to give up the good to go for the great."',
        famousPerson: 'John D. Rockefeller'
    }
    , {
        quoteText: '"When you reach the end of your rope, tie a knot in it and hang on."',
        famousPerson: 'Franklin D. Roosevelt'
    }
    , {
        quoteText: '"In the long run, the sharpest weapon of all is a kind and gentle spirit."',
        famousPerson: 'Anne Frank'
    }
    , {
        quoteText: '"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."',
        famousPerson: 'Mark Twain'
    }
    , {
        quoteText: '"Do what you can, with what you have, where you are."',
        famousPerson: 'Teddy Roosevelt'
    }
    , {
        quoteText: '"People are just as happy as they make up their minds to be."',
        famousPerson: 'Abraham Lincoln'
    }
    , {
        quoteText: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
        famousPerson: 'Winston Churchill'
    }
    , {
        quoteText: '"Remember that the happiest people are not those getting more, but those giving more."',
        famousPerson: 'H. Jackson Brown, Jr.'
    }
    , {
        quoteText: '"The only impossible journey is the one you never begin."',
        famousPerson: 'Tony Robbins'
    }
    , {
        quoteText: '"I have no special talent. I am only passionately curious."',
        famousPerson: 'Albert Einstein'
    }
    , {
        quoteText: '"The only person you are destined to become is the person you decide to be."',
        famousPerson: 'Ralph Waldo Emerson'
    }
    , {
        quoteText: '"May you live all the days of your life."',
        famousPerson: 'Jonathan Swift'
    }
    , {
        quoteText: '"Those who cannot remember the past are condemned to repeat it."',
        famousPerson: 'George Santayana'
    }
    , {
        quoteText: '"The only thing necessary for the triumph of evil is for good men to do nothing."',
        famousPerson: 'Edmund Burke'
    }
    , {
        quoteText: '"Insanity is doing the same thing over and over again and expecting different results."',
        famousPerson: 'Albert Einstein'
    }
    , {
        quoteText: '"Life would be tragic if it weren’t funny."',
        famousPerson: 'Stephen Hawking'
    }
    , {
        quoteText: '"It is never too late to be what you might have been."',
        famousPerson: 'George Eliot'
    }
    , {
        quoteText: '"The power of imagination makes us infinite."',
        famousPerson: 'John Muir'
    }
    , {
        quoteText: '"Everything you’ve ever wanted is on the other side of fear."',
        famousPerson: 'George Addair'
    }
    , {
        quoteText: '"We design our lives through the power of choices."',
        famousPerson: 'Richard Bach'
    }
    , {
        quoteText: '"Shoot for the moon. Even if you miss, you’ll land among the stars."',
        famousPerson: 'Les Brown'
    }
    , {
        quoteText: '"If you tell the truth, you don’t have to remember anything."',
        famousPerson: 'Mark Twain'
    }
    , {
        quoteText: '"Knowing yourself is the beginning of all wisdom."',
        famousPerson: 'Aristotle'
    }
    , {
        quoteText: '"We are what we repeatedly do; excellence, then, is not an act but a habit."',
        famousPerson: 'Aristotle'
    }
    ,{
        quoteText: '"What you do speaks so loudly that I cannot hear what you say."',
        famousPerson: 'Ralph Waldo Emerson'
    }
    ,{
        quoteText: '"Those who make you believe absurdities can make you commit atrocities."',
        famousPerson: 'Voltaire'
    }
    ,{
        quoteText: '"You can discover more about a person in an hour of play than in a year of conversation."',
        famousPerson: 'Plato'
    }
    ,{
        quoteText: '"Once you’ve accepted your flaws, no one can use them against you."',
        famousPerson: 'George R. R. Martin'
    }
    ,{
        quoteText: '"When we strive to become better than we are, everything around us becomes better too."',
        famousPerson: 'Paolo Coelho'
    }
    ,{
        quoteText: '"Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter."',
        famousPerson: 'Francis Chan'
    }
    ,{
        quoteText: '"You will face many defeats in life, but never let yourself be defeated."',
        famousPerson: 'Maya Angelou'
    }
    ,{
        quoteText: '"Challenges are what make life interesting and overcoming them is what makes life meaningful."',
        famousPerson: 'Joshua J. Marine'
    }
    ,{
        quoteText: '"Keep your face to the sunshine and you can never see the shadow."',
        famousPerson: 'Helen Keller'
    }
    ,{
        quoteText: '"Always forgive your enemies; nothing annoys them so much."',
        famousPerson: 'Oscar Wilde'
    }
    ,{
        quoteText: '"Power tends to corrupt, and absolute power corrupts absolutely."',
        famousPerson: 'John Dalberg-Acton'
    }
    ,{
        quoteText: '"Do not go where the path may lead; go instead where there is no path and leave a trail."',
        famousPerson: 'Ralph Waldo Emerson'
    }
    ,{
        quoteText: '"Nothing is impossible, the word itself says, ‘I’m possible!’"',
        famousPerson: 'Audrey Hepburn'
    }
    ,{
        quoteText: '"Always remember that you are absolutely unique. Just like everyone else."',
        famousPerson: 'Margaret Meade'
    }
    ,{
        quoteText: '"It is better to fail in originality than to succeed in imitation."',
        famousPerson: 'Herman Melville'
    }
    ,{
        quoteText: '"A mind is like a parachute. It doesn’t work if it isn’t open."',
        famousPerson: 'Frank Zappa'
    }
    ,{
        quoteText: '"It is our choices, that show what we truly are, far more than our abilities."',
        famousPerson: 'J.K. Rowling'
    }
    ,{
        quoteText: '"A lion doesn’t concern himself with the opinions of the sheep."',
        famousPerson: 'Lionel Messi'
    }
    ,{
        quoteText: '"The way to get started is to quit talking and begin doing."',
        famousPerson: 'Walt Disney'
    }
    ,{
        quoteText: '"A friend is someone who gives you total freedom to be yourself."',
        famousPerson: 'Jim Morrison'
    }
    ,{
        quoteText: '"I alone cannot change the world, but I can cast a stone across the water to create many ripples."',
        famousPerson: 'Mother Teresa'
    }
    ,{
        quoteText: '"Science is what you know. Philosophy is what you don’t know."',
        famousPerson: 'Bertrand Russell'
    }
    ,{
        quoteText: '"The successful warrior is the average man, with laser-like focus."',
        famousPerson: 'Bruce Lee'
    }
    ,{
        quoteText: '"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."',
        famousPerson: 'Dr. Seuss'
    }
    ,{
        quoteText: '"In order to write about life first you must live it."',
        famousPerson: 'Ernest Hemingway'
    }
    ,{
        quoteText: '"We don’t stop playing because we grow old; we grow old because we stop playing."',
        famousPerson: 'George Bernard Shaw'
    }
    ,{
        quoteText: '"If I have seen further than others, it is by standing upon the shoulders of giants."',
        famousPerson: 'Isaac Newton'
    }
    ,{
        quoteText: '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
        famousPerson: 'Thomas Edison '
    }
    ,{
        quoteText: '"The further a society drifts from the truth, the more it will hate those that speak it."',
        famousPerson: 'George Orwell'
    }
    ,{
        quoteText: '"All our dreams can come true if we have the courage to pursue them."',
        famousPerson: 'Walt Disney'
    }
    ,{
        quoteText: '"You are never too old to set another goal or to dream a new dream."',
        famousPerson: 'C.S. Lewis'
    }
    ,{
        quoteText: '"Life itself is the most wonderful fairy tale."',
        famousPerson: 'Hans Christian Andersen'
    }
    ,{
        quoteText: '"It isn’t where you came from. It’s where you’re going that counts."',
        famousPerson: 'Ella Fitzgerald'
    }
    ,{
        quoteText: '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."',
        famousPerson: 'Albert Einstein'
    }
    ,{
        quoteText: '"So many books, so little time."',
        famousPerson: 'Frank Zappa'
    }
    ,{
        quoteText: '"A room without books is like a body without a soul."',
        famousPerson: 'Marcus Tullius Cicero'
    }
    ,{
        quoteText: '"A friend is someone who knows all about you and still loves you."',
        famousPerson: 'Elbert Hubbard'
    }
    ,{
        quoteText: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        famousPerson: 'Martin Luther King Jr.'
    }
    ,{
        quoteText: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
        famousPerson: 'Mahatma Gandhi'
    }
    ,{
        quoteText: '"It is better to be hated for what you are than to be loved for what you are not."',
        famousPerson: 'Andre Gide'
    }
    ,{
        quoteText: '"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."',
        famousPerson: 'Albert Einstein'
    }
    ,{
        quoteText: '"Good friends, good books, and a sleepy conscience: this is the ideal life."',
        famousPerson: 'Mark Twain'
    }
    ,{
        quoteText: '"We are all in the gutter, but some of us are looking at the stars."',
        famousPerson: 'Oscar Wilde'
    }
    ,{
        quoteText: '"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."',
        famousPerson: 'Bill Keane'
    }
    ,{
        quoteText: '"I have not failed. I have just found 10,000 ways that will not work."',
        famousPerson: 'Thomas A. Edison'
    }
    ,{
        quoteText: '"The man who does not read has no advantage over the man who cannot read."',
        famousPerson: 'Mark Twain'
    }
    ,{
        quoteText: '"Love all, trust a few, do wrong to none."',
        famousPerson: 'William Shakespeare'
    }
    ,{
        quoteText: '"A day without sunshine is like, you know, night."',
        famousPerson: 'Steve Martin'
    }
    ,{
        quoteText: '"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one"',
        famousPerson: 'George R.R. Martin'
    }
    ,{
        quoteText: '"For every minute you are angry you lose sixty seconds of happiness."',
        famousPerson: 'Ralph Waldo Emerson'
    }
    ,{
        quoteText: '"If you can not explain it to a six year old, you do not understand it yourself."',
        famousPerson: 'Albert Einstein'
    }
    ,{
        quoteText: '"I am not upset that you lied to me, I am upset that from now on I can not believe you."',
        famousPerson: 'Friedrich Nietzsche'
    }
    ,{
        quoteText: '"If you only read the books that everyone else is reading, you can only think what everyone else is thinking."',
        famousPerson: 'Haruki Murakami'
    }
    ,{
        quoteText: '"I have always imagined that Paradise will be a kind of library."',
        famousPerson: 'Jorge Luis Borges'
    }
    ,{
        quoteText: '"Sometimes the questions are complicated and the answers are simple."',
        famousPerson: 'Dr. Seuss'
    }
    ,{
        quoteText: '"We read to know we are not alone."',
        famousPerson: 'William Nicholson'
    }
]