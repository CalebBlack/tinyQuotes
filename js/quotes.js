var citas = [
    "Click. Boom. &iexcl;Asombroso!//Steve Jobs//fav",
    "El diseño no es sólo cómo se ve o cómo se siente. El Diseño es cómo funciona//Steve Jobs//Paulo Nunes",
    "¿Por qué enrolarse en la armada cuando puedes ser un pirata?//Steve Jobs//fav",
    "La innovación distingue entre un líder y un seguidor//Steve Jobs",
    "La calidad es más importante que la cantidad. Un 'home run' es mucho mejor que dos dobles//Steve Jobs//DaLancelotBruh//twitter",
    "Hay gente que lo único que quiere es ver arder el mundo//Alfred, Batman//DaLancelotBruh//twitter//fav",
    "Si se te da bien algo, nunca lo hagas gratis…//Joker, Batman//DaLancelotBruh//twitter",
    "Ya no puedes fiarte de nadie. Si quieres algo, tienes que hacerlo tú, ¿no crees?//Joker, Batman//DaLancelotBruh//twitter",
    "No es sino la sombra de una ilusion lo que amas, no puedo darte lo que anhelas//Aragorn, El Se&ntilde;or de los Anillos//lorenzo.v.matterhorn.948//facebook",
    "&iexcl;Algebraico!//Finn el Humano, Hora de Aventuras//toofartooblack//tumblr//fav",
    "Veni, vidi, vinci//Julio Cesar//lorenzo.v.matterhorn.948//facebook",
    "Lo que hacemos en nuestras vidas tiene su eco en la eternidad//Maximo Decimo Meridio, Gladiator//lorenzo.v.matterhorn.948//facebook",
    "Hazlo, o no lo hagas, pero no lo intentes//Yoda, Star Wars//lorenzo.v.matterhorn.948//facebook",
    "Relaxing cup of caf&eacute; con leche in Plaza Mayor//Ana Botella//lorenzo.v.matterhorn.948//facebook",
    "Con el ojo por ojo, al final todos ciegos//Mahatma Gandhi//Alex Coll",
    "Es el sindrome FLictonic CLipple Weber//Haruko Haruhara, Furi Curi//DaLancelotBruh//twitter//fav",
    "La ciudad se llenó de humo, olvidando que ahí fuera existe un mundo. No hay cosas extraordinarias, vives en un mundo donde sólo hay cosas obvias. Una vida entera que espera morir lentamente... Pero Haruko está aquí y yo no olvido que existe un mundo ahí fuera.//Raharu Haruha, Furi Curi//DaLancelotBruh//twitter//fav",
    "Con un ejercito detras se puede ser sumamente politico//Gayo, Gladiator//lorenzo.v.matterhorn.948//facebook",
    "Instaura una pequeña anarquía, altera el orden establecido, y comenzará a reinar el caos. Soy un agente del caos. ¿Y sabes qué tiene el caos? Que es justo//Joker, Batman//toofartooblack//tumblr",
    "&iexcl;ESTO ES ESPARTA!//Leonidas, 300 La Pelicula//lorenzo.v.matterhorn.948//facebook",
    "Quisiera volver a verte hoy mismo, pero estoy dispuesto a esperar toda la noche y buena parte de ma&ntilde;ana//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Oh, no me importaría Hazel Grace. Sería un privilegio que me rompieras el coraz&oacute;n//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Es una metafora. Te colocas el arma asesina entre los dientes, pero no le das el poder de matarte//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Aceptamos el amor que creemos merecer//Profesor Bill, Ventajas de Ser un Marginado//toofartooblack//tumblr//fav",
    "Yo no soy un monstruo... sólo voy un paso por delante//Joker, Batman//toofartooblack//tumblr//fav",
    "No somos buenos en todo, no somos buenos por nosotros mismos//Simon Sinek//DaLancelotBruh//twitter//fav",
    "Soy el tipo de persona que si no sabe una respuesta le diré que no la sé. Pero le apuesto a que sé cómo encontrar la respuesta, y la encontrar&eacute;.//En Busca de la Felicidad//DaLancelotBruh//twitter",
    "Esta parte de mi vida, este pequeño momento de mi vida lo llamo Felicidad//En Busca de la Felicidad//toofartooblack//tumblr",
    "Cuando se atisba un rato de felicidad siempre hay alguien que quiere destruirla//En Busca de la Felicidad//toofartooblack//tumblr//fav",
    "Si tienes un sueño tienes que protegerlo. Las personas que no llegan alto te dirán que seas igual que ellas. Si quieres algo ve por ello y punto//En Busca de la Felicidad//toofartooblack//tumblr//fav",
    "La vida es una partida y hay que vivirla de acuerdo con las reglas del juego//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "Me alegro de que inventaran la bomba atómica: así si necesitan voluntarios para ponerse debajo cuando la lancen, puedo presentarme el primero//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "No sé por qué hay que dejar de querer a una persona sólo porque se ha muerto. Sobre todo si era cien veces mejor que los que siguen viviendo//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr",
    "Si yo fuera pianista, tocaría dentro de un maldito armario//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "No cuenten nunca nada a nadie. En el momento en que uno cuenta cualquier cosa, empieza a echar de menos a todo el mundo//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "Tu puedes llorar, no hay ninguna verg&uuml;enza en eso//Will Smith//toofartooblack//tumblr",
    "Vive el dia como si tú lo inventaras//Will Smith//toofartooblack//tumblr",
    "Lo que para una persona puede ser una distancia prudencial, para otra puede ser un abismo//After Dark, Haruki Murakami//toofartooblack",
    "La gente lo llama amor//Tokio Blues, Haruki Murakami//toofartooblack",
    "&iexcl;Mi Madre!//Musculitos, Historias Corrientes//DaLancelotBruh//twitter//fav",
    "Me gustaria decir que esto no es una autobiografia y que es una historia, pero si lo hiciese mentiria//Paulo Nunes, Mi autobiografia//SwagCokieMnstr//facebook",
    "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia//Henry Ford//fluffypuffyunic//tumblr//fav",
    "Nadie mas que uno puede liverar su mente de la esclavitud//Bob Marley//fluffypuffyunic//tumblr//fav",
    "Algunas personas simplemente nacen siendo estrellas, lo tienes o no lo tienes y yo, definitivamente nací siendo una//Lady Gaga//fluffypuffyunic//tumblr",
    "No puedes tener un mejor mañana si sigues pensando en el ayer//Taylor Swift//DaLancelotBruh//twitter//fav",
    "Si el plan A no funciona pasa al plan B y sino recuerda que hay mas letras en el abcdario//Anonimo",
    "Meu estilo de vida liberta minha mente, completamente louco mas un louco consciente//Chorao, Cantante//fav",
    "La parte buena de hacer una autobiografia es que tienes toda una vida para hacerla y siempre tendras nuevos capitulos a hacer, eso si, centrate mas a que cada capitulo que hagas sea mas emocionante//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebook//fav",
    "Quiero morir de felicidad, no de vejez//Pau Escalé//edgar.careta//facebook//fav",
    "Cuando un problema no tiene solución, no es un problema. Cuando un problema tiene solución, no es un problema//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebbok",
    "La dialetica es la Ciencia de las ideas//Platon//edgar.careta//facebbok//fav",
    "El lunatico es quien mas sabe, y por eso lo esta//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebook//fav"
];

var quotes = [
    "I kept taking shots because they burned my chest where I was trying to get you out//drinkt0forget, tumblr User//drinkt0forget//tumblr//fav",
    "Whatever makes you weird, is probably your greatest asset//Joss Whedon//DaLancelotBruh//twitter//fav",
    "Same rules apply//Bruce Robertson, Filth//toofartooblack//tumblr//fav",
    "Homies. Help homies. Always.//Adventure Time (Hora de Aventuras)//toofartooblack//tumblr//fav",
    "I am Shakespeare in the flesh//Kanye West, Interview with Sway Universe//toofartooblack//tumblr//fav",
    "Cry as much as you want to, but make sure when you're finished, you never cry for the same reason again//Wiz Hhalifa//toofartooblack//tumblr",
    "If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for//Bob Marley//hugsanddrugsssss//tumblr//fav",
    "the things you own end up owning you//Tyler Durden, Fight Club//hugsanddrugsssss//tumblr//fav",
    "We make up horrors to help us cope with the real ones//Stephen King//hugsanddrugsssss//tumblr//fav",
    "I don't want to die without any scars//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "It's only after we've lost everything that we're free to do anything//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "Everyone smiles with that invisible gun to their head//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "The lower you fall, the higher you'll fly//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "It's not love or anything, but I think I like you, too//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav",
    "Life's pretty good, and why wouldn't it be? I'm a pirate, after all//Johnny Depp//hugsanddrugsssss//tumblr//fav",
    "I'm not sure I'm adult yet//Johnny Depp//hugsanddrugsssss//tumblr//fav",
    "maybe this world is another planet's hell?//Aldous Huxley//hugsanddrugsssss//tumblr//fav",
    "Silence is one of the hardest arguments to refute//Josh Billings//hugsanddrugsssss//tumblr//fav",
    "I told my psychiatrist that everyone hates me. He said I was being ridiculous...//...Everyone hasn’t met me yet//hugsanddrugsssss//tumblr//fav",
    "I don't judge, I only hate//Annie Dubaj//hugsanddrugsssss//tumblr//fav",
    "I hate people, cause its free//Annie Dubaj//hugsanddrugsssss//tumblr//fav",
    "They promised that dreams can come true, but forgot to mention that nightmares are dreams too//Oscar Wilde//hugsanddrugsssss//tumblr//fav",
    "They judge me like a picture book, by the colours like they forgot to read//Lana Del Rey, Brooklyn Baby//hugsanddrugsssss//tumblr//fav",
    "Live fast. Die young. Be wild. Have fun//Lana Del Rey//hugsanddrugsssss//tumblr//fav",
    "Doing what you love is freedom. Loving what you do is happiness//Lana Del Rey//hugsanddrugsssss//tumblr//fav",
    "Sometimes love is not enough and the road gets tough. I don’t know why//Lana Del Rey//hugsanddrugsssss//tumblr//fav",
    "Don’t let people treat you like a cigarette, they only use you when theyre bored and step on you when theyre done. Be like drugs, let them die for you//Anonymous//hugsanddrugsssss//tumblr//fav",
    "We're all mad here//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav",
    "Alice: How long is forever? White Rabbit: Sometimes, just one second//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav",
    "Imagination is the only weapon in the war against reality//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav",
    "People cry, not because they’re weak. It’s because they’ve been strong for too long//Johnny Depp//hugsanddrugsssss//tumblr//fav",
    "Past is just waiting to fuck you up//James Cook, Skins//hugsanddrugsssss//tumblr//fav",
    "James Cook: I fucking love you, man. I fucking love you to bits// James Cook, Skins//hugsanddrugsssss//tumblr//fav",
    "JJ: Do you know what Naomi is spelled backwards? Cook: What? JJ: I moan.//Everyone Season 3, episode 1. Skins (2009) //hugsanddrugsssss//tumblr//fav",
    "I'm James Cook!//James Cook, Skins//toofartooblack//tumblr//fav"
];