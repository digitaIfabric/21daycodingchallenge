def voterTurnout(voter_signatures, voter_ids)
    if (voter_signatures.length != voter_ids.length)
        return false
    end

    truth = []
    for ii in 0..voter_ids.length do
        if voter_signatures[ii] == voter_ids[ii]
            truth[ii] = true
        else 
            truth[ii] = false
        end
    end    
    
    if truth.any?
        return 'All clear, we can count the votes!'
    else
        return 'FRAUD!'
    end
    
end

# voter_signatures = ['Bill Billiamson','Kate Etak','Brandon Brandonus','Simon Simonson','Jane Janesford']
# voter_ids = ['Bill Billiamson','Kate Etak','Brandon Brandonus','Simon Simonson','Jane Janesford']       
# voterTurnout(voter_signatures, voter_ids)
