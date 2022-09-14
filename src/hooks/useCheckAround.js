

export const useCheckAround = () => {
    //the function is supposed to return all elements that are around the passed element while having in mind that on borders we can't
    //check all elements around.


    const checkAround = (elementId, board) => {
        let elementsAround = []

        //first, we will deal with all the corners
        //0
        if (elementId===0){
          elementsAround.push(board[1], board[10], board[11])
        }

        //9
        else if (elementId===9){
            elementsAround.push(board[8], board[18], board[19])
        }

        //90
        else if (elementId===90){
            elementsAround.push(board[80], board[81], board[91])
        }

         //99
        else if (elementId===99){
            elementsAround.push(board[88], board[89], board[98])
        }

        //now we will deal with all borderlines

        //top
        else if (elementId < 9){
            elementsAround.push(board[elementId-1], board[elementId+1], board[elementId+9], board[elementId+10], board[elementId+11])
        }
        //bottom
        else if (elementId > 90){
            elementsAround.push(board[elementId-11], board[elementId-10], board[elementId-9], board[elementId-1], board[elementId+1])
        }

        //left
        else if (elementId % 10 === 0){
            elementsAround.push(board[elementId-10], board[elementId-9], board[elementId+1], board[elementId+10], board[elementId+11])
        }

        //right
        else if ((elementId + 1) % 10 === 0){
            elementsAround.push(board[elementId-9], board[elementId-10], board[elementId-1], board[elementId+9], board[elementId+10])
        }

        //everything else
        else {
            elementsAround.push(board[elementId-11], board[elementId-10], board[elementId-9], board[elementId-1], board[elementId+1],
                board[elementId+9], board[elementId+10], board[elementId+11])
        }
        return elementsAround
    }



    return [checkAround]
}