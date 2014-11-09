var randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
var userNames = ['Data', 'Picard', 'Geordi', 'Worf', 'Riker', 'Wesley'];
var roomNames = ['The Bridge', 'Ten Forward', 'Sickbay', 'The Holodeck'];
var lines = ['You were like a brother to me. Do you remember? We used played in the park near the lake.',
    'Yes, of course. Every summer, you came to Bergerac.',
    'You used to make swords out of the reeds, and when you cut your hand you would come running to me, and I would say, Let me',
    'Playing near the Porte de Nesle.',
    'And how many did you plat against?',
    'No more than a hundred.',
    'Tell me!',
    'No.',
    '(sotto, prompting) Let it go.',
    '(sotto) What?',
    '(sotto) Let it go.',
    'Let it go. Let it go. You tell me what you were going to say. Do you dare?',
    'I do dare. I love someone.',
    'Ah!',
    'He does not know.',
    'Ah!',
    'Not yet. But he is proud, noble, brave and beautiful.',
    'Beautiful?',
    'What\'s the matter?',
    'With me? Nothing. It is my hand. He is in the Guards?',
    'Since this morning. Baron Christien de Neuvillette. In your own regiment.',
    'Ah.',
    'Promise me. Promise me to be his friend.',
    'I promise.',
    'Oh, I love you. I must go now. Oh, and tell him to write me. A hundred men! What courage!',
    'Oh, but I have done better since.',
    'Bravo!',
    'Wonderful! Wonderful.',
    'Lieutenant Barclay\'s performance was adequate, but clearly not rooted in The Method approach. I do not understand why.',
    'Data, because it\'s polite.',
    'Good job, Reg. And only what, six weeks of lessons.',
    'Good job, period.',
    'We have a patient teacher.',
    'Ah, Worf, I have an opening in my workshop.',
    'Well done.',
    'Thank you, Counsellor.',
    'You\'ve come a long way, Reg.',
    'After more rehearsals than I can count.',
    'I don\'t just mean your acting ability. It takes a great deal of courage to put yourself on display like that.',
    'You think so?',
    'There was a time when nothing could have dragged you onto a stage in front of an audience. You\'ve made tremendous progress.',
    'I, I guess.',
    'Don\'t you think so?',
    'Well, I just feel more more comfortable playing somebody else. Maybe all this is not any better than escaping into a holodeck',
    'I disagree. This isn\'t fantasy, it\'s theatre. You used to withdraw onto the holodeck. You isolated yourself inside your own',
    'Maybe you\'re right',
    'The fusion reactors that power the array are extremely unstable. There is a high risk of overload.',
    'What about the computer systems?',
    'They do not seem to be functioning at all, sir.',
    'Captain, I am picking up an unidentified device one point eight kilometres from the array.',
    'On screen. Magnify.',
    'That\'s some kind of probe. I\'ll bet that\'s what damaged the array.',
    'Is it emitting any signals, Lieutenant?',
    'Negative, sir. I show no activity.',
    'Mister La Forge, why not go out and take a closer look.',
    'Aye, sir. Lieutenant Barclay, report to the main shuttlebay',
    'Enterprise, this is shuttle five in position, ready to begin a short-range scan.',
    'Proceed, shuttle five.',
    'Reg, why don\'t we begin with the passive high-res series, all right?',
    'Electromagnetic band?',
    'Give it a try.',
    'I\'m picking up visual wavelengths only. Between forty five hundred and seven thousand angstroms.',
    'Let\'s try the neutron densitometer.',
    'Nothing.',
    'Hmm. Doesn\'t seem to want to give up any secrets. Let\'s go to active scan.',
    'No, no modulation.',
    'Really? You are definitely not from our neighbourhood. Increase to three point zero.',
    'Commander?',
    'Yeah, Reg?',
    'Thanks for assigning me to this mission.',
    'Don\'t mention it. You\'re one of my top engineers. It\'s about time you got in on some of the interesting stuff. This, this is',
    'There\'s still no modulation.',
    'Hit it with a positron emission.',
    'What was that? Computer\'s down, Reg. Reg?',
    'Any indication of the probe\'s energy source, Data?',
    'No, sir. Power emissions do not match any known radiation patterns. We have not encountered this technology before, sir.',
    'Very well. Isolate the probe and place it in tow. We\'ll take it to Science Station four oh two in the Kohlan system.',
    'Captain, the probe has begun to move. It is approaching the Enterprise.',
    'Shields up.',
    'Aye, sir',
    'There was enough energy in that flash to overload your optic nerves. It knocked you unconscious.',
    'My visor must have filtered it out.',
    'Exactly. But there was no apparent retinal damage and the cornea looks fine. But I\'m still waiting for a full sero-amino',
    'You shouldn\'t have to wait too long for the results.',
    'What do you mean?',
    'Couldn\'t you use a global mode in your scanner? It would be a lot faster.',
    'That\'s not possible. We\'re talking about human cells here, not isolinear circuits. I think you\'d better stick to engineering,',
    'A cell has a an electromagnetic signature just like a circuit element does. Theoretically, it should work with just a few',
    'Probe now closing at fifteen point three metres per second. Collision course.',
    'Captain, sensors are reading no particulate emissions or subspace field distortions.',
    'Then how is it able to move?',
    'Method of propulsion is unknown, sir.',
    'Ensign, take us away from it. One quarter impulse.',
    '(the lady at helm) Aye, sir.',
    'The probe is matching our speed and course.',
    'Captain, an energy field is forming around the device. Intensity is three point two terawatts and increasing.',
    'Sir, the shuttlecraft shields did not provide sufficient protection for its computer. Our computer may also be vulnerable. I',
    'Ensign Anaya, full about. Half impulse.',
    'One half impulse.',
    'The probe is following.',
    'Options, Number One?',
    'We can\'t use photon torpedoes. An explosion this close could cripple us.',
    'Sir, recommend full phasers.',
    'Proceed.',
    'Firing phasers.',
    'No effect, Captain.',
    'The probe\'s field intensity is continuing to build, sir. We are in danger.',
    'Riker to La Forge. Can you increase phaser power',
    'Attempting to now, Commander. Isolate phasers eighty to one twenty. Shunt all the plasma',
    'To the emitters. Yes, sir, I\'m already on it. Ready.',
    'Phasers are as hot as we can make them, Captain',
    'Mister Worf.',
    'Aye, sir.',
    'Nothing.',
    'Go to warp two.',
    'Aye, sir. Warp two.',
    'The probe is still with us, sir.',
    'At warp two?',
    'Yes, sir.',
    'Captain, the probe\'s energy output is overloading our shields. Failure anticipated in forty seven seconds.',
    'I\'m willing to entertain suggestions.',
    'Captain, we\'re dropping to impulse',
    '(a lady engineer) Commander, warp power has been transferred to the shield grid.',
    'Yeah, but by whom?',
    'Barclay, what are you doing?',
    'Lieutenant Barclay to Captain Picard. You can fire photon torpedoes',
    'Maximum yield, full spread.',
    'We\'re too close.',
    'I\'m certain the shields will hold.',
    'Mister La Forge',
    'I don\'t know how he did it, but shield strength has been increased by three hundred percent',
    'It should be enough, Captain.',
    'Mister Worf. Photon torpedoes. Maximum yield, full spread.',
    'Aye.',
    'Thank you, Mister Barclay',
    'You\'re welcome, Captain. Barclay out. I\'m sorry if I overstepped my authority.',
    '(to himself) Don\'t mention it',
    'Mister Barclay. Everyone\'s still trying to figure out exactly how you did it.',
    'Well, it just occurred to me that I could set up a frequency harmonic between the deflector and the shield grid using the',
    'Uh huh. I see that',
    'I\'m glad you could join us, Mister Barclay. Your report, Mister La Forge.',
    'Each of the telescope\'s subspace antenna clusters is powered by its own fusion reactor, but a single computer controls them',
    'So all eighteen reactors were affected when the computer was damaged?',
    'That\'s right. They\'re starting to overload, and could eventually go critical. The explosion would destroy the Array, and I',
    'A standard isolation procedure would be advisable.',
    'I agree. We\'ll cut off each reactor from the damaged control system and repair them one by one.',
    'How long will that take?',
    'Two to three weeks at least.',
    'All right, Mister La Forge.',
    'I don\'t agree. We could repair all of the reactors simultaneously instead of one by one.',
    'Simultaneously? All eighteen?',
    'Yes, sir.',
    'But the Argus computer is inoperable.',
    'Not entirely. The core memory is still intact, and we could programme a completely new control system.',
    'An interesting suggestion, Lieutenant. However, that approach would require much more time than our original plan. At least',
    'I could have it ready for you in two days.',
    'What?',
    'If you could assist me in the morning, Commander.',
    'Sure, Reg',
    'The moon, yes, that\'ll be my home, my paradise. I shall find there all the souls I love. Socrates, Galileo. And when I arrive',
    'That was a real improvement.',
    'Same time, day after tomorrow?',
    'Same time',
    'Reg? May I join you?',
    'Of course, please. Sit down, Counsellor.',
    'Hard at work?',
    'I\'m getting prepared for tomorrow\'s meeting in Engineering. We\'re planning our repair strategy.',
    'I really enjoyed the scene you just performed.',
    'You\'re a very forgiving audience.',
    'Not at all. I thought you were brilliant. You\'ve changed.',
    'Is that a professional opinion?',
    'Pure observation.',
    'No, it\'s true. I can\'t explain it. In the last few days I\'ve found confidence I never knew was there.',
    'I\'m proud of you, Reg. I\'m glad for you, too. Well, I\'d better be going.',
    'Must you?',
    'I think so.',
    'Wouldn\'t you like to take a walk with me through the arboretum? The zalnias should be in bloom.',
    'Reg, as your former counsellor, I don\'t think it would be appropriate.',
    'I don\'t need a counsellor. What I need is the company of a charming, intelligent woman.',
    'Goodnight, Mister Barclay',
    'Where\'s Lieutenant Barclay?',
    'I stopped by his quarters on my way over. He wasn\'t there.',
    'Computer, location of Lieutenant Barclay.',
    'Lieutenant Barclay is on holodeck three',
    'G sub I, J of t as t approaches infinity.',
    'G of t over G naught.',
    'So it is, so it is.',
    'I still don\'t see how you\'re going to incorporate quantum principle into general relativity without adjusting the',
    'If we increase the value as you suggest, we must face the possibility of twenty six dimensions, instead of ten.',
    'I don\'t think I could deal with that.',
    'I certainly could not.',
    'If the semiset curved into the subatomic, the infinities might cancel each other out.',
    'Gruss Gott. They just might.',
    'We had a meeting at oh seven hundred.',
    'I\'m sorry, Commander. Thank you, Professor. End programme',
    'What was that all about?',
    'I had some ideas late last night. I needed to consult with the computer about some quantum electrodynamic calculations. A',
    'A little? Most of the stuff on that blackboard was way out of my league. And yours too.',
    'Not really. I just haven\'t thought along those lines before. It\'s all pretty evident now, and if you were to put your mind to',
    'Reg, ever since our run in with that probe, something\'s different about you.',
    'What, because I\'m beginning to behave like the rest of the crew? With confidence in what I\'m doing?',
    'You just spent the entire night arguing grand unification theories with Albert Einstein!',
    'Yes, but',
    'Reg, something\'s happened to you, and we can\'t ignore that.',
    'Yes. I\'ve finally become the person I\'ve always wanted to be. Do we have to ask why?',
    'Yeah, I think we do'];

var users = [];
for (var i = 0; i < userNames.length; i++) {
    var existingUser = Meteor.users.findOne({username: userNames[i]});
    if (!existingUser) {
        var userId = Meteor.users.insert({
            username: userNames[i]
        });
    }
    users.push(existingUser || Meteor.users.findOne(userId));
}

var userIds = _.map(users, function (user) {
    return user._id;
});
var rooms = [];
for (var i = 0; i < roomNames.length; i++) {
    var existingRoom = Rooms.findOne({name: roomNames[i]});
    if (!existingRoom) {
        var roomId = Rooms.insert({
            name: roomNames[i],
            topic: "Test Topic",
            isPrivate: false,
            ownerId: users[0]._id,
            invited: [],
            users: userIds,
            moderators: []
        });
    }
    rooms.push(existingRoom || Rooms.findOne(roomId));
}
if (Messages.find().count() === 0) {
    var now = new Date().getTime();
    for (var i = 0; i < 1000; i++) {
        generateMessage(now - i * 360);
    }
}
function generateMessage(time) {
    Messages.insert({
        authorId: randomElement(users)._id,
        timestamp: time,
        message: randomElement(lines),
        roomId: randomElement(rooms)._id,
        type: "plain"
    });
}
Meteor.setInterval(function () {
    var now = new Date().getTime();
    generateMessage(now);
}, 3000);
