

import { fireEvent, screen, render } from "@testing-library/react";
import InputBox from "../components/InputBox";


test('on change event testing', ()=> {
   render(<InputBox />);
   const input = screen.getByRole('textbox') // if type is text
   fireEvent.change(input, {target : {value : 'a'}}) // if we fire any text
   expect(input.value).toBe('a'+'test'); // in the return the response will be 'atest' like this added with test 
})
