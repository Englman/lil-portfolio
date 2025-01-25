// Import for 1st button content -------------------------------------------
export const textContent = "Greetings to all of you dear visitors! This is site, which expresses about my life and news. It is still being developed and always becomes better and better!"
export const image = new Image();

export const video = document.createElement('video');
video.src = '../img/artElement.mp4';
video.style.width = '98%'
video.style.marginTop = '10px'
video.style.borderRadius = '5px'
video.setAttribute('preload', true)
video.setAttribute('autoplay', true)
video.setAttribute('loop', true)
video.setAttribute('async', true)

image.src = './img/newone.png';
image.style.width = '100%';
image.style.borderRadius = '15px';
image.style.marginTop = '15px';

// This for 2nd button content -------------------------------------
// new Date(year, month, date, hours, minutes, seconds, ms)
const arrayOfObjects = [
    {
        title: "Footer life 2",
        UpdateVersion: "0.8.1e",
        description: "I've got some news, at the moment newsletter input form is functional and you can subscribe on our channel. But don't even try to trick the system! It will carefully check as each symbol as an accuracy of the e-mail.",
        author: "Englman",
        date: "12.02.24"
    },
    {
        title: "Footer life",
        UpdateVersion: "0.8e",
        description: "What's up guys? I am doing good, can't complain. So, it was quite a while since the last update huh? If you look closely, you'll notice that icon with my raptor again lives on its own, it means that now you can change the color theme at any moment. Important to notice that, footer also began to extend. More functions are on their way! Cya later",
        author: "Englman",
        date: "10.02.24"
    },
    {
        title: "Theme final update",
        UpdateVersion: "0.7.3e",
        description: "Now, theme update truly done. Enjoy!!!",
        author: "Englman",
        date: "31.01.24"
    },
    {
        title: "Theme update",
        UpdateVersion: "0.7.2e",
        description: "Hello there, glad to tell you that i've finished the theme toggle. There are still some things which must be fixed or added. So, enjoy!!!",
        author: "Englman",
        date: "31.01.24"
    },
    {
        title: "Theme process",
        UpdateVersion: "0.7.1e",
        description: "Greetings, guys. Theme toggle is in the process, so. I've added a really intersting combination of the colors, although it will take some time for it to be done. Glad to say it. Now, it's more convinient and pleasant to search through the site. Also, 'Updates' department was edited a bit. That was all news for today, so see you later!!!",
        author: "Englman",
        date: "29.01.24"
    },
    {
        title: "Ideas for the project",
        UpdateVersion: "0.7e",
        description: "Greetings, my foes! This notification appeared to tell you that since i was busy with my OS. I have been updating it, i decided to change the main color theme. For some reason, recently i thought that this design is not that suitable 😩, i find it so bright. So, later. I will add new color theme, and also opportunity to change the themes. So, see you until the next notification.",
        author: "Englman",
        date: "28.01.24"
    },
    {
        title: "Email process 2",
        updVersion: "0.6.1e",
        description: "This time, i'll say - Hello instead of saying Greetings, i've got some news for you. I've already added a prototype of email section, by pressing the 4th button you will detect it appearing inside of the white block). It's just a layout, it still hasn't got any of the functions. Nevertheless, it is in the process. By the way, i decided to not add animations with barba, cause i've already got a lot. I'll think through what to add instead. So, see you later!",
        author: "Englman",
        date: "28.12.23"
    },
    {
        title: "Email process",
        updVersion: "0.6e",
        description: "Greetings my dear visitors! Long time no see again huh? Yes, i've delayed the work process a little bit due to the fact that i had no time for my project. But since i was lazy and tired as shit, i was working on my project literally being on knees. The email messages currently under development, just wait. That was a minute see you later.",
        author: "Englman",
        date: "27.12.23"
    },
    {
        title: "Portfolio update",
        updVersion: "0.5.1e",
        description: "Morning everyone, i've finished working on portfolio. Now we can recognize each other a way better. So, welcome!",
        author: "Englman",
        date: "30.11.23"
    },
    {
        title: "Ideas update",
        updVersion: "0.5e",
        description: "Greetings, long time no see huh? I've got ideas to keep my project up, one of them is portfolio, which is currently under development. Later there will be email index, and i'll add absolutely new animations to my site! So don't think that i abandoned it, just be patient) See you later",
        author: "Englman",
        date: "29.11.23"
    },
    {
        title: "Just an update",
        updVersion: "0.4e",
        description: "Unfortunately, since all of this days i have been trying to find suitable design for my site, i haven't still worked on functionality of my site. That's why in this update you can see only cool design)",
        author: "Englman",
        date: "18.11.23"
    },
    {
        title: "Day of the currency",
        updVersion: "0.3e",
        description: "In this day, i am still working on some authomatizations, so it would easier for me to add content for you!",
        author: "Englman",
        date: "15.11.23"
    },
    
    {
        title: "Update of automatization system",
        updVersion: "0.2e",
        description: "This update contains some automatizations, thereby allowing to read pleasantly.",
        author: "Englman",
        date: "07.11.23"
    },
    {
        title: "After Halloween update",
        updVersion: "0.1e",
        description: "In this update i've added some new animations that allow you to search through my site pleasantly!",
        author: "Englman",
        date: "06.11.23"
    }
]

export default arrayOfObjects;