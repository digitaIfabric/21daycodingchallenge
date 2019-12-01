def castVote (name, votes)
    if (name == 'Tim')
      votes[0] = votes[0] + 1
    elsif (name == 'Sally')
      votes[1] = votes[1] + 1
    elsif (name == 'Beth')
      votes[2] = votes[2] + 1
    end
    return votes
end

# name = 'Beth'
# votes = [0, 2, 1]
# castVote(name, votes)
