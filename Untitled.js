var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"wake_up_scene"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"wake_up_scene":["^You wake up. It is 10:23 in the afternoon. The streetlights outside gleam through the blinds, forming stripes of orange rays that prints on your walls, your bed sheets, and your eyes. Your brain feels like a jar of jam after ten hours of sleep. Why did you even sleep that long?","\n",{"->":"wake_up_choices"},{"#f":1}],"wake_up_choices":[[["ev",{"^->":"wake_up_choices.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Maybe I’m just really tired, I’m a reporter after all.",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up_choices.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^I’m the god of sleeping. I sleep eternally. This sober thing, being awake and feel the light and the air and the dust, this is wrong. ",{"->":"$r","var":true},null]}],["ev",{"^->":"wake_up_choices.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^I don’t know why I’m doing this (continue). ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wake_up_choices.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^And what do you report? You try to remind yourself what you were writing by looking at the table. Numerous papers and photos piled upon one another, with statistics and graphs you don’t seem to remember. Maybe you just haven’t got to that part yet. Your handwriting is written in such a hasty manner that you can’t figure out what you wrote 10 hours ago.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"wake_up_choices.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Soberiety is a curse. You take a sip of tea from the desk near you. It feels much better.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"wake_up_choices.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Me neither. But you, the reporter, not you, the game player, you are the only character I’m able to write at this moment. You have no autonomy while the game player has some autonomy. I have no idea what you, the game player, feels about being a reporter who works during the night and completely forgot what she was on yesterday, partly because I’m not so sure myself. If you are intrigued, or at least somewhat interested into how this is gonna end (which I honestly don’t know), please continue.","\n",["ev","str","^Continue.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"get_up_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"get_up_scene":["^You get up from the bed.","\n",{"->":"get_up_choices"},{"#f":1}],"get_up_choices":[[["ev",{"^->":"get_up_choices.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Get your bathrobe.",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Take another sip of the tea.  ",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Go to the bathroom",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"get_up_choices.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^You grab the robe from the ground. A pair of eyes stares back at you. They glow in the dark.","\n",[["ev",{"^->":"get_up_choices.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^That is my expansive watch. I'm secretly rich.  ",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^It's a ghost!",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.c-0.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^This is too early for this sort of metaphor. It's unwitty and unrealistic.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"get_up_choices.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"get_up_choices.0.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"get_up_choices.0.c-0.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^It's your cat Ira. She's a black cat and 3 years and 4 months old. Be nice to her.","\n",[["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Hello Ira, you are so kuuuuute",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Why would you name her that? I was excited about having a cyberkitty and now you've ruined it. ",{"->":"$r","var":true},null]}],["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Black cats are ominous. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^She neows and walks away.","\n",{"->":"get_up_choices"},{"#f":5}],"c-1":["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Ira is a cool name, get on with it.","\n",{"->":"get_up_choices"},{"#f":5}],"c-2":["ev",{"^->":"get_up_choices.0.c-0.9.g-0.2.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^You are ominous.","\n",{"->":"get_up_choices"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"get_up_choices.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Refreshing. This cup of tea has been laying here since yesterday morning. Now you feel as clear-headed as ever.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"get_up_choices.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"bathroom_choices"},{"#f":5}]}],{"#f":1}],"bathroom_choices":[[["ev",{"^->":"bathroom_choices.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Take a look of yourself in the mirror.",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Wash your face.",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Get out. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom_choices.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"bathroom_choices.0.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^My face looks familiar.",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-0.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^I look ugly. ",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-0.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^I look tired. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom_choices.0.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"bathroom_choices.0.c-0.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"bathroom_choices.0.c-0.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Again, you see your mother's eyes staring back at you. Your eyes look extremely tired, black circles grow darker and darker each day, probably because of your habit of sleeping during the day and working during the night. Your father's nose breathing steadily. You still can't determine whose lips you have, but it looks very dry, despite that fact that you just drank water.","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"bathroom_choices.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"bathroom_choices.0.c-1.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I think I forgot something. ",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-1.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^It's cold.",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-1.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Someone's waiting for me.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom_choices.0.c-1.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^What is it?","\n",{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"bathroom_choices.0.c-1.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^It's almost winter.","\n",{"->":".^.^.^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Weren't you suppose to meet at 10PM sharp?","\n",[["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^She's waiting at the door. ",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I'm late! ",{"->":"$r","var":true},null]}],["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Oh no oh no oh no...",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"bathroom_choices.0.c-1.7.c-2.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"go_to_the_door_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"bathroom_choices.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"get_up_choices"},{"#f":5}]}],{"#f":1}],"go_to_the_door_scene":[["^You run towards the door. It's the darkness, you can't distinguish between nine and ten because everything is always so serene and dark, no matter what time it is. A writer thrives during the night, but it's another thing for them to remember the exact time for a meeting during the night.","\n",["ev",{"^->":"go_to_the_door_scene.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Open the door. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^A shadowy figure a bit taller than you stands before you. She is reading something with one hand in the pocket of her coat, but you can't figure what it is. You can't see her face either. The lights shine behind her, her long black hair hides half of her face.","\n",["ev","str","^Continue.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^She looks up, a bit startled by the door and the suddenly-lit-up sensor light in the hall. She's in her late twenties, wearing a beige trent coat that you have seen her wore all autumn. Her lips are pursed, and her fiery eyes light up with rage. \"What's your problem? I called you ten times, I thought you were dead. I was about to call the head editor.\"","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Sorry, I overslept.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"It's the darkness.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Who are you again?\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^The woman sighs, \"It's the third time this week, and it's only Friday.\"","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^That's 40% on time, not bad by your standards.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Get an alarm clock or something. You have a perfectly functioning phone, do you even use it?\" She glares at you empty hands, not waiting for an answer, \"Now do you wanna head out so we can talk?\" She puts the book into her pocket.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Nod. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^She sighs again, and heads towards the stairway. It kind of feels too late to ask her what her name is again.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^I think her name is \"K\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I remember her name being \"L\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^It's \"V\".",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^K","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^L","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-0.9.c-0.9.c-0.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^V","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^She tilts her head and frowns, \"What?\" Now she's convinced there's something wrong with you.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"It's the darkness. It's always so dark outside during the night, which makes it hard to tell the time, especially during autumn.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Nevermind.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Darkness is going to swallow us all someday.\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^She stares back at you in confusion. After a second or so, she asks, \"Do you wanna head out now?\"","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Nod. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^She sighs again, and heads towards the stairway.It feels too late to ask her what her name is.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^I think her name is \"K\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I remember it being \"L\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^It's \"V\".",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^K","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^L","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-1.9.g-0.2.c-0.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^V","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^\"Are you kidding me? First being late for more than half an hour and now this?\" She points at you, \"I'm your partner in this news article we are doing. It's honestly falling apart and getting worse and worse with you.\"","\n",["ev","str","^Continue.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^It's deteriorating, whatever this article is about.","\n",["ev","str","^Continue.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^    ","\n","^She slams the book onto your shoulder, \"get yourself together,\" she looks as if she's about to cry.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"I'm sorry, it won't happen again.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Please don't cry.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Stand there and nod awkwardly.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Let's move,\" she turns towards the stairway. It feels too late to ask her what her name is again.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^I think her name is \"K\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I remember it being \"L\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^It's \"V\".",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^K","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^L","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-0.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^V","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^\"I'm not crying,\" she glares back at you, \"do you wanna get going?\" she does not wait for an answer and turns towards the staircase.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Nod. It feels too late to ask her what her name is again.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^I think her name \"K\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I remember it being \"L\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^It's \"V\".",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^K","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^L","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-1.9.c-0.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^V","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^\"Let's move,\" she turns towards the stairway.","\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Nod again. It feels too late to ask her what her name is again.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^I think her name \"K\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I remember it being \"L\".",{"->":"$r","var":true},null]}],["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^It's \"V\".",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^K","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^L","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"go_to_the_door_scene.0.c-0.9.c-0.3.c-2.9.c-0.3.c-0.4.c-2.9.c-0.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev","str","^V","/str","/ev",{"VAR=":"partner_name","re":true},["ev","str","^Follow ","ev",{"VAR?":"partner_name"},"out","/ev","^.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"walking_and_conversation_scene"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"walking_and_conversation_scene":["^Yet to be written. The end.","\n","end",{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"partner_name"},"/ev","end",null],"#f":1}],"listDefs":{}};