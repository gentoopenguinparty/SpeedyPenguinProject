/**
 * @jest-environment jsdom
 */


import React from 'react'
import {render, screen, cleanup} from '@testing-library/react';
import QuestionsAnswers from '../../QuestionsAnswers/QuestionsAnswers.jsx'
import '@testing-library/jest-dom/extend-expect';

test('test rendering', () => {
  render(<QuestionsAnswers/>);
  const qaElement = screen.getByTestId('QA');
  expect(qaElement).toBeInTheDocument();
  expect(qaElement).toHaveTextContent('Questions and Answers');
});


// test('renders QuestionAnswers', () => {
//   render(<QuestionAnswers/>);
//   const linkElement = screen.getByText('testRender')
// });