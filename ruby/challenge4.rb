def registerToVote (name, unregisteredVoters)
  names = []
  for x in unregisteredVoters
    if (x != name)
        names << x
    end
  end
  return names
end

# name = 'Bradley'
# unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie']
# registerToVote(name, unregisteredVoters)
