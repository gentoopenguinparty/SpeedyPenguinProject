/**
 * @jest-environment jsdom
 */


import React from 'react'
import {render, screen, cleanup} from '@testing-library/react';
import QuestionsAnswers from '../../QuestionsAnswers/QuestionsAnswers.jsx'
import QAcard from '../../QuestionsAnswers/QAcard.jsx'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

test('test QuestionAnswers rendering', () => {
const testData = [{question_id: 642262, question_body: 'lknsadvlknasdv', question_date: '2022-07-19T00:00:00.000Z', asker_name: 'asdcsd', question_helpfulness: 0, answers: {}}];
  render(<QuestionsAnswers data={testData}/>);
  const qaElement = screen.getByTestId('test');
  expect(qaElement).toBeInTheDocument();
  expect(qaElement).toHaveTextContent('Questions & Answers');
  const searchBarElement = screen.getByTestId('searchbar');
  expect(searchBarElement).toBeInTheDocument();
  /// ??? other searchBar testing
  const incrementButton = screen.getByTestId('increment button');
  expect(incrementButton).toBeInTheDocument();
  expect(incrementButton).toHaveTextContent('Load More Questions');

  const openModalButton = screen.getByTestId('open modal button');
  expect(openModalButton).toBeInTheDocument();
  expect(openModalButton).toHaveTextContent('Ask A Question');


});


test('test QA card rendering', () => {
  // const testData = [{ question_id: 642262, question_body: 'lknsadvlknasdv', question_date: '2022-07-19T00:00:00.000Z', asker_name: 'asdcsd', question_helpfulness: 0, answers: {}}];

  const testData = [ {question_id: 301799, question_body: 'Aut ut impedit eius aut quidem.', question_date: '2021-02-02T00:00:00.000Z', asker_name: 'Bella.Streich28', question_helpfulness: 26, answers: {2816347: {
    answerer_name: "Keon_Dietrich43",
    body: "Dolor qui esse at aut quia quisquam quibusdam officiis.",
    date: "2021-07-10T00:00:00.000Z",
    helpfulness: 7,
    id: 2816347,
    photos: []}}, 2816349: {
      answerer_name: "Vivienne81",
      body: "Omnis laboriosam sed soluta.",
      date: "2021-07-14T00:00:00.000Z",
      helpfulness: 18,
      id: 2816349,
      photos: ['https://images.unsplash.com/photo-1544376664-80b17…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80']}},
 {question_id: 301795, question_body: 'Labore rem et commodi labore doloribus nobis quae et.', question_date: '2020-11-27T00:00:00.000Z', asker_name: 'Watson55', question_helpfulness: 24, answers: {2816315 : {
  answerer_name: "Hettie62",
  body: "Et dolore a rerum.",
  date: "2020-09-03T00:00:00.000Z",
  helpfulness: 16,
  id: 2816315,
  photos: [
   "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
   "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"]}}},
 {question_id: 301805, question_body: 'Consequatur esse soluta aliquid eius molestiae hic placeat.', question_date: '2020-09-13T00:00:00.000Z', asker_name: 'Lance79', question_helpfulness: 23},
 {question_id: 301803, question_body: 'Enim eum libero sunt non praesentium quis autem.', question_date: '2021-07-24T00:00:00.000Z', asker_name: 'Veda_Stoltenberg', question_helpfulness: 23},
 {question_id: 301804, question_body: 'Et sapiente iusto sed aspernatur voluptatem et.', question_date: '2020-10-22T00:00:00.000Z', asker_name: 'Tevin34', question_helpfulness: 19}]
    render(<QAcard qaCards={testData} />);
    // const qaElement = screen.getByTestId('test');
    // expect(qaElement).toBeInTheDocument();
    // expect(qaElement).toHaveTextContent('Questions & Answers');
    // const searchBarElement = screen.getByTestId('searchbar');
    // expect(searchBarElement).toBeInTheDocument();
    // /// ??? other searchBar testing
    // const incrementButton = screen.getByTestId('increment button');
    // expect(incrementButton).toBeInTheDocument();
    // expect(incrementButton).toHaveTextContent('Load More Questions');

    // const openModalButton = screen.getByTestId('open modal button');
    // expect(openModalButton).toBeInTheDocument();
    // expect(openModalButton).toHaveTextContent('Ask A Question');


  });


// test('renders QuestionAnswers', () => {
//   render(<QuestionAnswers/>);
//   const linkElement = screen.getByText('testRender')
// });