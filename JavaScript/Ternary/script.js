//
// // let result = a > 21 ? "Great job!!!" : "You suck!!!"
// // let result = age > 21
// //                     ? "Great"
// //                     : "bad"
//
// let animal = "mouse"
// let myAnswer =  ` Your ${animal === "dog"? "woof": "meow"}`
// console.log(myAnswer)
//
// // Template literals
// let bird = "chirp"
// let cat = "meow"
// // concatenation
// console.log(bird + cat)
//
//
//
// let house = "mine"
// let yourhouse = 'yours'
//
// let student = [ "Gerald", 24, "Austin", false]
//
// let newPerson = {
//     "@st": 24
// }
//
// let data = {
//     __id: 24
// }
//
//
let person = {
    name: "Walter White",
    age: 50,
    city: "Albuquerque",
    hobbies: "Cooking"
};
console.log(person.name)
console.log(person["name"])
// console.log(person[name])
let doggy = "city"
console.log(person[doggy])
console.log(person.doggy)

// Sample data from TMDB
// {
//     "page": 1,
//     "results": [
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             18
//         ],
//         "id": 1242651,
//         "original_language": "es",
//         "original_title": "Hallow",
//         "overview": "",
//         "popularity": 0.4453,
//         "poster_path": null,
//         "release_date": "",
//         "title": "Hallow",
//         "video": false,
//         "vote_average": 0,
//         "vote_count": 0
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/yPU89i5KvCrfPkbgsUqYjRycPaY.jpg",
//         "genre_ids": [
//             18,
//             27,
//             53
//         ],
//         "id": 1205656,
//         "original_language": "en",
//         "original_title": "Hallow Road",
//         "overview": "Two parents enter a race against time when they receive a distressing late-night phone call from their daughter after she caused a tragic car accident.",
//         "popularity": 37.4304,
//         "poster_path": "/dVsgV7ak6vR5xyXFggooJQinXBg.jpg",
//         "release_date": "2025-04-16",
//         "title": "Hallow Road",
//         "video": false,
//         "vote_average": 6.774,
//         "vote_count": 53
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             16
//         ],
//         "id": 486678,
//         "original_language": "en",
//         "original_title": "PAW Patrol: Halloween Heroes",
//         "overview": "Gear up for tricks, treats, and rescues in these 7 Halloween PAW Patrol adventures, featuring a really ghoul double-length special! Join a costume caper on Cap'n Turbot's haunted ship, track down a mysterious ghost, explore a creepy cabin, help a lost baby bat, save a pumpkin patch, stop a corn maze catastrophe and more!",
//         "popularity": 0.3933,
//         "poster_path": "/41StfADamaYwOBHQIaJhNp5yEVX.jpg",
//         "release_date": "2017-09-18",
//         "title": "PAW Patrol: Halloween Heroes",
//         "video": true,
//         "vote_average": 8.9,
//         "vote_count": 5
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/qxlPv0EEdt7PktGcgCQh6aNszky.jpg",
//         "genre_ids": [
//             16,
//             35,
//             27
//         ],
//         "id": 1019105,
//         "original_language": "en",
//         "original_title": "The Paloni Show! Halloween Special!",
//         "overview": "Leroy, Reggie and Cheruce Paloni host a Halloween special full of spooky shorts from a group of up-and-coming animators.",
//         "popularity": 1.2872,
//         "poster_path": "/y9LjwvEZDFWojjyKXdHb20A6526.jpg",
//         "release_date": "2022-10-17",
//         "title": "The Paloni Show! Halloween Special!",
//         "video": false,
//         "vote_average": 6.3,
//         "vote_count": 32
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/nLWWMMU6xjC6RUJvCPMnTdjDSt5.jpg",
//         "genre_ids": [
//             27
//         ],
//         "id": 1369988,
//         "original_language": "en",
//         "original_title": "All Hallows' Eve: Inferno",
//         "overview": "From an executive producer of Terrifier 2 comes All Hallows Eve: Inferno, a new installment of the franchise that first introduced the world to Damien Leone's Art the Clown and the short film Terrifier. This horror anthology brings together up-and-coming writers and directors and features tales that will send a shiver down your spine.",
//         "popularity": 0.3736,
//         "poster_path": "/tFYUtfo1R3KClEzUB0wLtlHvrsq.jpg",
//         "release_date": "2024-10-01",
//         "title": "All Hallows' Eve: Inferno",
//         "video": false,
//         "vote_average": 2.5,
//         "vote_count": 4
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/jVMQ5VcpGCNGs8sR2Zwy3RIzqmu.jpg",
//         "genre_ids": [
//             35
//         ],
//         "id": 272426,
//         "original_language": "de",
//         "original_title": "H3 - Halloween Horror Hostel",
//         "overview": "When the driver manages to crash the car on the road in the middle of nowhere, three guys and a girl seem to have no other choice than to walk through the dark woods to find the nearest hostel...",
//         "popularity": 0.1805,
//         "poster_path": "/zgo6utNadfUPmHNZC9Si7InoJsh.jpg",
//         "release_date": "2008-03-18",
//         "title": "H3 - Halloween Horror Hostel",
//         "video": false,
//         "vote_average": 6.2,
//         "vote_count": 10
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             27
//         ],
//         "id": 691932,
//         "original_language": "en",
//         "original_title": "All Hallows' Eve Horror",
//         "overview": "It's that creepy time of year again...Halloween. And a group of friends have gotten together for a party at an old abandoned and haunted house where an entire family was once murdered. Seems totally safe right? Wrong. Dead wrong. Because not only do the kids decide to play some tricks and have a few treats, they manage to revive a supernatural killer; a killer hell bent on sacrificing them one by one to evil forces possessing the home. Will anyone escape? Or will they all be slain and become permanent residents of the infamous Amityville house? With original music by Nightmare queen Tuesday Knight, this is a night that none of them will ever forget ,for as long as they live.",
//         "popularity": 1.0698,
//         "poster_path": "/7aibdfDwoji2iKvPvVFDtA4Yzaf.jpg",
//         "release_date": "2017-03-03",
//         "title": "All Hallows' Eve Horror",
//         "video": false,
//         "vote_average": 3.75,
//         "vote_count": 4
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/qSW9qkISnZ5B7n8GagR09uCXeao.jpg",
//         "genre_ids": [],
//         "id": 1317845,
//         "original_language": "en",
//         "original_title": "NXT Halloween Havoc 2024",
//         "overview": "The 2024 NXT Halloween Havoc was a professional wrestling event produced by WWE. It marked the fifth annual Halloween Havoc held for the promotion's developmental brand NXT and the 17th Halloween Havoc event overall. It took place on Sunday, October 27, 2024, at the Giant Center in Hershey, Pennsylvania.",
//         "popularity": 3.3104,
//         "poster_path": "/ltdO9Ap6mlCX80jbn4YGyWjTCY4.jpg",
//         "release_date": "2024-10-27",
//         "title": "NXT Halloween Havoc 2024",
//         "video": true,
//         "vote_average": 7,
//         "vote_count": 4
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
//         "genre_ids": [
//             14,
//             12
//         ],
//         "id": 12445,
//         "original_language": "en",
//         "original_title": "Harry Potter and the Deathly Hallows: Part 2",
//         "overview": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
//         "popularity": 19.5905,
//         "poster_path": "/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
//         "release_date": "2011-07-12",
//         "title": "Harry Potter and the Deathly Hallows: Part 2",
//         "video": false,
//         "vote_average": 8.084,
//         "vote_count": 21230
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/zPm8ObX2rw5UYJpxxccZtYRL8eq.jpg",
//         "genre_ids": [
//             16,
//             28,
//             80,
//             9648
//         ],
//         "id": 903939,
//         "original_language": "ja",
//         "original_title": "名探偵コナン ハロウィンの花嫁",
//         "overview": "Shibuya, Tokyo, is bustling with the Halloween season. A wedding is being held at Shibuya Hikarie, where Detective Miwako Sato of the Metropolitan Police Department is dressed in a wedding dress. While Conan and the other invited guests are watching, an assailant suddenly bursts in, and Detective Wataru Takagi, who was trying to protect Sato, is injured. Takagi survived and the situation was settled, but in Sato's eyes, the image of the grim reaper that she had seen when Detective Matsuda, the man she had been in love with, had been killed in a series of bombings three years ago, overlapped with Takagi's.",
//         "popularity": 3.2436,
//         "poster_path": "/zfsLhI6yAHH9pdhY6EConmUCumX.jpg",
//         "release_date": "2022-04-15",
//         "title": "Detective Conan: The Bride of Halloween",
//         "video": false,
//         "vote_average": 6.49,
//         "vote_count": 98
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
//         "genre_ids": [
//             12,
//             14
//         ],
//         "id": 12444,
//         "original_language": "en",
//         "original_title": "Harry Potter and the Deathly Hallows: Part 1",
//         "overview": "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
//         "popularity": 19.5049,
//         "poster_path": "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
//         "release_date": "2010-11-17",
//         "title": "Harry Potter and the Deathly Hallows: Part 1",
//         "video": false,
//         "vote_average": 7.739,
//         "vote_count": 19688
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             27
//         ],
//         "id": 422724,
//         "original_language": "en",
//         "original_title": "3 All Hallow's Eve",
//         "overview": "The dead have stories to tell a horror fan seeking the obscure.",
//         "popularity": 0.0755,
//         "poster_path": "/dPlXf07kBmMdlRdJvHutKfdJqlL.jpg",
//         "release_date": "2014-08-31",
//         "title": "Voices From The Grave / All Hallows' Eve: The Dead Have Stories To Tell",
//         "video": false,
//         "vote_average": 4.7,
//         "vote_count": 3
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             27
//         ],
//         "id": 656980,
//         "original_language": "en",
//         "original_title": "Paranormal Farm 3 Halloween",
//         "overview": "Things have gotten a lot more violent at the farm, and Carl must get to the bottom of it to help Lucy and Darren solve the strange re-occurrences. The DVD and Blu-ray extras have not been completed, and a contract needs to be signed to enable distribution of the behind the scenes. Carl has one last chance to prove his gift as a Paranormal Investigator.",
//         "popularity": 0.428,
//         "poster_path": "/gW5I0cgxOqNzcNAGkc85aTbuHsc.jpg",
//         "release_date": "2019-12-22",
//         "title": "Paranormal Farm 3: Halloween",
//         "video": false,
//         "vote_average": 5.8,
//         "vote_count": 5
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [],
//         "id": 630700,
//         "original_language": "en",
//         "original_title": "The Berenstain Bears - Halloween Treats!",
//         "overview": "The furry clan returns with jack-o'-lantern adventures that will make your bones tingle with fright and delight! The bear cubs are called upon to use their best scouting skills to solve the great pumpkin disappearance, brave a spooky old mansion, ward off ghosts and save their much-loved Bat Cave. In the end, the cubs learn that spooky things always come with a simple explanation and that's a Halloween treat for them!",
//         "popularity": 0.0256,
//         "poster_path": "/s20necGzFIikbtU3P0EJPHk9RsV.jpg",
//         "release_date": "2009-08-25",
//         "title": "The Berenstain Bears - Halloween Treats!",
//         "video": true,
//         "vote_average": 10,
//         "vote_count": 1
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [],
//         "id": 964984,
//         "original_language": "es",
//         "original_title": "¿Cómo enamorar a una chica a las 2:00 am... en Halloween?",
//         "overview": "Two women hook-up during Halloween. One of them will try to make the other fall in love.",
//         "popularity": 0.0168,
//         "poster_path": "/n65Nz57BlTF1YE6TTrOIDRwcm7X.jpg",
//         "release_date": "",
//         "title": "How to Make a Girl Fall in Love at 2 am... on Halloween?",
//         "video": false,
//         "vote_average": 10,
//         "vote_count": 1
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/wzk7sEjsIivYBiW9LJpDvVjqEaC.jpg",
//         "genre_ids": [
//             10402
//         ],
//         "id": 657929,
//         "original_language": "en",
//         "original_title": "Oingo Boingo: Halloween '87",
//         "overview": "Danny Elfman and Co.’s run of multi-night Halloween stands at Irivne Meadows from 1986 to 1991 were the stuff of legend. This film contains two full sets from October 30th and 31st, 1987.",
//         "popularity": 0.0718,
//         "poster_path": "/cTyEB6GWaCweytZkbpQUfA4u2Qa.jpg",
//         "release_date": "1987-10-31",
//         "title": "Oingo Boingo: Halloween '87",
//         "video": false,
//         "vote_average": 10,
//         "vote_count": 1
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             16
//         ],
//         "id": 286660,
//         "original_language": "fr",
//         "original_title": "Les Schtroumpfs Halloween",
//         "overview": "In this compliation of 5 episodes from the Hanna-Barbera Smurfs series, get ready for some spooky smurf! Pumpkins and ghosts are now filling the village!",
//         "popularity": 0.0907,
//         "poster_path": "/x3aEHfJSaZinWvVeh3bvFCvp9jp.jpg",
//         "release_date": "2005-09-22",
//         "title": "A Smurfy Halloween",
//         "video": true,
//         "vote_average": 8.5,
//         "vote_count": 4
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             99,
//             27,
//             35
//         ],
//         "id": 532996,
//         "original_language": "en",
//         "original_title": "Halloweenville",
//         "overview": "Join Gary P. Cohen, director of Video Violence, Video Violence 2, and Captives aka Mama's Home as he travels to the seemingly normal small town of Lambertville, NJ and watches it transform into Halloweenville.",
//         "popularity": 0.7259,
//         "poster_path": "/ladkODY61V6dzjQ7CKPcNx2UDhi.jpg",
//         "release_date": "2011-10-31",
//         "title": "Halloweenville",
//         "video": false,
//         "vote_average": 10,
//         "vote_count": 1
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/eoUsEF3srO3XnXatogXSTRDWtDC.jpg",
//         "genre_ids": [
//             16,
//             27
//         ],
//         "id": 726289,
//         "original_language": "en",
//         "original_title": "Black Halloween",
//         "overview": "An enterprising trick-or-treater has plans for acquiring Halloween candy. All the Halloween candy. At any cost.",
//         "popularity": 0.0261,
//         "poster_path": "/eqohJOUmVLP31bqFQvgVvsySq3T.jpg",
//         "release_date": "2009-02-07",
//         "title": "Black Halloween",
//         "video": false,
//         "vote_average": 0,
//         "vote_count": 0
//     },
//     {
//         "adult": false,
//         "backdrop_path": null,
//         "genre_ids": [
//             27,
//             28,
//             18,
//             878,
//             14
//         ],
//         "id": 892430,
//         "original_language": "pt",
//         "original_title": "Infeliz Halloween",
//         "overview": "A movie about the blue ghost and missing people on halloween",
//         "popularity": 0.0386,
//         "poster_path": "/6WZYd9Af9RqcejmIHY1jLgtSdfh.jpg",
//         "release_date": "2021-10-31",
//         "title": "Kill yourself on halloween",
//         "video": false,
//         "vote_average": 9.5,
//         "vote_count": 4
//     }
// ],
//     "total_pages": 37,
//     "total_results": 721
// }

