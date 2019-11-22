def registerToVote (name, unregisteredVoters): 
  names = []
  for x in unregisteredVoters:
    if (x != name):
        names.append(x)
  return names

# name = 'Bradley'
# unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie']
# registerToVote(name, unregisteredVoters)