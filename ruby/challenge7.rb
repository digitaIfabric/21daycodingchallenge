def termTopics(interviews)
    count = [0, 0, 0]
    for interview in interviews
        if (interview == 'smart city')
            count[0] = count[0] + 1
        elsif (interview == 'arts funding')
            count[1] = count[1] + 1
        elsif (interview == 'transportation')
            count[2] = count[2] + 1
        end
    end
    return count
end
