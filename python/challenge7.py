def termTopics(interviews):
    count = [0, 0, 0 ]
    for interview in interviews:
        if (interview == 'smart city'):
            count[0] = count[0] + 1
        elif (interview == 'arts funding'):
            count[1] = count[1] + 1
        elif (interview == 'transportation'):
            count[2] = count[2] + 1
    return count
