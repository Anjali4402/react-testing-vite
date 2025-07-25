

import { fireEvent, screen, render } from "@testing-library/react";
import InputBox from "../components/InputBox";


test('on change event testing', () => {
   render(<InputBox />);
   // const input = screen.getByRole('textbox') // if type is text
   const input = screen.getByTestId('test')
   fireEvent.change(input, { target: { value: 'a' } }) // if we fire any text
   expect(input.value).toBe('a' + 'test'); // in the return the response will be 'atest' like this added with test 
});

test("Test getByLabelTest", () => {
   render(<InputBox />);
   const checkLabel = screen.getByLabelText("Test Label"); // will find the lable name
   expect(checkLabel).toBeInTheDocument();
})

test('Checkbox test case', () => {
   render(<InputBox />);
   const checkboxLabel = screen.getByLabelText("Are You Agree");
   expect(checkboxLabel).toBeInTheDocument(); // is that label is in the document or not.
   expect(checkboxLabel).toBeChecked();  // weather box is check or not 
});


test("Test getAllByLabelText", () => {
   render(<InputBox />);

   // get from table text
   const sameLabelTexts = screen.getAllByLabelText('UserName');
   // expect(sameLabelText).toBeInTheDocument();
   for (let i = 0; i < sameLabelTexts.length; i++) {
      expect(sameLabelTexts[i]).toBeInTheDocument();
   }
});

test("getByPlaceholderText and getAllByPlaceholderText", ()=>{
   render(<InputBox />);

   // if we have to test only one placehoder text
   const input = screen.getByPlaceholderText("Enter Test Label");
   expect(input).toBeInTheDocument();


   // if we have to test multiple placeholder with same text
   const muliplePlaceholder = screen.getAllByPlaceholderText("Enter Username");

   // expect(muliplePlaceholder)
   for(let i =0; i <muliplePlaceholder.length ; i++){
      expect(muliplePlaceholder[i]).toBeInTheDocument();
      expect(muliplePlaceholder[i]).toHaveValue("John")
   }



})


test('getByDisplayValue and getAllByDisplayValue', ()=> {
   render(<InputBox />);
   const selectedBox = screen.getByDisplayValue("john@gmail.com");

   const selectedAllBox = screen.getAllByDisplayValue("John");

   for(let i =0 ; i < selectedAllBox.length; i ++ ){
      expect(selectedAllBox[i]).toBeInTheDocument();
   } 

   expect(selectedBox).toBeInTheDocument();
});


test("Testing getByTitle and getAllByTitle", ()=>{
   render(<InputBox />);

   const titlebox = screen.getByTitle("Submit the form");
   expect(titlebox).toBeInTheDocument();

   const allTitleBox = screen.getAllByTitle("testing title");
   for(let i =0; i< allTitleBox.length; i++){
      expect(allTitleBox[i]).toBeInTheDocument();
   }

});


test("Testing getByAltText and getAllByAltText", ()=>{
   render(<InputBox />);

   const altbox = screen.getByAltText("alt-text-unique");
   expect(altbox).toBeInTheDocument();


   const allAltBox = screen.getAllByAltText("alt-text");
   for(let i =0; i < allAltBox.length -1 ; i++){
      expect(allAltBox[i]).toBeInTheDocument();
   }


})