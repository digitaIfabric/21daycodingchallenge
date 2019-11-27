# Examples
#  Input:

#        const voter_signatures = [
#          'Bill Billiamson',
#          'Kate Etak',
#          'Brandon Brandonus',
#          'Fake McFakerson',
#          'Jane Janesford'
#        ]

#        const voter_ids = [
#          'Bill Billiamson',
#          'Kate Etak',
#          'Brandon Brandonus',
#          'Simon Simonson',
#          'Jane Janesford'
#        ]
    
#  Output:
#  FRAUD!
#  Input:

#        const voter_signatures = [
#          'Bill Billiamson',
#          'Kate Etak',
#          'Brandon Brandonus',
#          'Simon Simonson',
#          'Jane Janesford'
#        ]

#        const voter_ids = [
#          'Bill Billiamson',
#          'Kate Etak',
#          'Brandon Brandonus',
#          'Simon Simonson',
#          'Jane Janesford'
#        ]
    
#  Output:
#  'All clear, we can count the votes!

def voterTurnout(voter_signatures, voter_ids):
    if (len(voter_signatures) != len(voter_ids)):
        return false

    truth = []
    truth[:len(voter_ids)] = [0] * len(voter_ids)
    for ii in range (0, len(voter_ids)):
        if voter_signatures[ii] == voter_ids[ii]:
            truth[ii] = True
        else: 
            truth[ii] = False
    if (any(truth)):
        return 'All clear, we can count the votes!'
    else:
        return 'FRAUD!'
        
voterTurnout(voter_signatures, voter_ids)


# voter_signatures = ['Bill Billiamson','Kate Etak','Brandon Brandonus','Simon Simonson','Jane Janesford']
# voter_ids = ['Bill Billiamson','Kate Etak','Brandon Brandonus','Simon Simonson','Jane Janesford']       
# voterTurnout(voter_signatures, voter_ids)
