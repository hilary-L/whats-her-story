'''
Created on Oct 16, 2015

@author: Ellie
'''
import random

def valid_input(prompt, choices):
    raw = raw_input(prompt)
    while raw not in choices:
        raw = raw_input('What was that?  Please type it again! ')
    return raw

def want_prompt(want_item):
    global already_placed
    if not already_placed:
        place_here = valid_input('Your character seeks ' + want_item + '.  Do you want to put ' + want_item + ' here? Type YES or NO. ', ('YES', 'NO'))
        if place_here == 'YES':
            already_placed = True
            return want_item
        else:
            return raw_input('Okay, then what is here? ')
    else:
        return raw_input('What is here? ')

name = raw_input("What is your character's name? ")
name_code = 'name = ' + name
print name_code

want = raw_input("What does your character seek? ")
want_code = 'want = ' + want
print want_code

print 'There is a door to your left and a door to your right.'
left = raw_input("What is the setting behind the door to your left? ")
left_code = 'if left then ' + left
right = raw_input("What is the setting behind the door to your right? ")
right_code = 'else if right then ' + right
print left_code
print right_code

already_placed=False
obstacle = raw_input('Behind the door to your left, the ' + left + ', there is an obstacle!  What is it? ')
print 'If your character, ' + name + ', overcomes the obstacle, they are magically transported to a castle.  In the castle is a treasure chest.  But what is in the treasure chest? '
overcome = want_prompt(want)
overcome_code = 'if overcome then ' +  overcome
print overcome_code
print "If your character does not overcome the obstacle, they are transported to the bottom of the sea.  It's not very fun down there, but there is a glowing cave.  What is in the cave? "
defeat = want_prompt(want)
defeat_code = 'else if defeat then ' + defeat
print defeat_code

print "Okay, let's go back to the door on the right.  Behind that door, " + right + ", there are two people, one mean and one nice."
mean_person = raw_input('Who is the mean person? ')
mean_code = 'mean_person = ' + mean_person
print mean_code
nice_person = raw_input('Who is the nice person? ')
nice_code = 'nice_person = ' + nice_person
print nice_code

print "If you talk to the mean person, they hand you an envelope.  You suspect it's full of poison, but just to be sure you open it.  What's inside? "
mean_outcome = want_prompt(want)
mean_outcome_code = 'if mean_person then ' + mean_outcome
print mean_outcome_code
print "If you talk to the nice person, they are delighted to see you!  They give you a present.  What's in the present? "
nice_outcome = want_prompt(want)
nice_outcome_code = 'if nice_person then ' + nice_outcome
print nice_outcome_code

continue_story = True
while continue_story:
    print "Now let's go through the story you just wrote!"
    print 'Your name is ' + name
    print 'You seek ' + want
    choice0 = valid_input('There are rooms to your left and right.  To the left is ' + left + ' and to the right is ' +  right + '.  Which way do you choose? Type LEFT or RIGHT. ', ('LEFT', 'RIGHT'))
    if choice0 == 'LEFT':
        find_out = valid_input('Congrats, you are now in the ' + left + '.  Here you find an obstacle, ' + obstacle + '.  Type FIND OUT to see if you can beat the obstacle! ', ('FIND OUT'))
        obstacle_outcome = random.random()
        if obstacle_outcome < .5:
            story_outcome = overcome
            print 'Congrats, you defeated the obstacle!  You were magically transported to a castle.  There you found a treasure chest, and in the treasure chest was ' + overcome
        else:
            story_outcome = defeat
            print 'You did not defeat the obstacle.  Instead you were transported to the bottom of the sea, where you saw a glowing cave.  There might still be something cool in the cave, though.  And it was...' + defeat 
    elif choice0 == 'RIGHT':
        person = valid_input('In this room, the ' + right + ', there are two people.  One is mean and one is nice--but who is who?! Well, maybe you can figure it out based on who they are.  One is ' + mean_person + ' and one is ' + nice_person + '.  Which do you choose?  Type in their name. ', (mean_person, nice_person))
        if person == mean_person:
            story_outcome = mean_outcome
            print 'Uh-oh, that is the mean person!  They hand you an envelope.  You suspect it is filled with poison but you open it anyways.  Inside is ' + mean_outcome
        elif person == nice_person:
            story_outcome = nice_outcome
            print 'Huzzah, you chose the nice person!  They give you a present.  Inside is ' + nice_outcome
    print 'You sought ' + want + '.  You got ' + story_outcome
    if story_outcome == want:
        print 'HELL YEAH YOU FOUND WHAT YOU SOUGHT.  GOOD JOB ' + name + '!!!!'
    else:
        print 'Oh well.  Your mother still loves you.  Besides, you still got ' + story_outcome
        try_again = valid_input('Do you want to try again?  Type YES or NO. ', ('YES', 'NO'))
        if try_again == 'YES':
            continue_story = True
        





