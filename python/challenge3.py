def castVote (name, votes): 
    if (name == 'Tim'):
      votes[0] = votes[0] + 1
    elif (name == 'Sally'):
      votes[1] = votes[1] + 1
    elif (name == 'Beth'):
      votes[2] = votes[2] + 1
    return votes

# name = 'Beth'
# votes = [0, 2, 1]
# castVote(name, votes)