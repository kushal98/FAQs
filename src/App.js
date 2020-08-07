import React from 'react';
import logo from './logo.svg';
import Faq from 'react-faq-component';
import './App.css';

const data_placement_prep = {
  title: "Placement Preparation",
  rows: [
    {
      title: "The ideal time to start preparation?",
      content: " A. As early as possible <br/> B. Best case scenario: 6th Sem. <br/> C. At least: have 2 months of preparation for T1.<br/> D.Worst case scenario: from the present day"
    },
    {
      title: "List of good resources?",
      content: "A. R S Aggarwal, IndiaBix, youtube videos if u have very less time. (Aptitude) <a href='https://www.geeksforgeeks.org/aptitude-gq/'>Link</a> <br/> B. GFG and Hackerank (go from basic to advanced), Leet-Code , CodeChef. <br/> C. Interview Experiences for different companies: <a href='https://www.geeksforgeeks.org/company-interview-corner/'>Link</a> <br/> D. Github Resources : <br/><a href='https://github.com/rbhatia46/Data-Science-Interview-Resources'>Link1</a><br/><a href='https://github.com/kdn251/interviews'>Link2</a><br/><a href='https://github.com/MaximAbramchuck/awesome-interview-questions'>Link3</a><br/><a href='https://yangshun.github.io/tech-interview-handbook/'>Link4</a><br/><a href='https://github.com/jwasham/coding-interview-university'>Link5</a><br/><a href='https://github.com/yashk2810/google-interview-university'>Link6</a><br/> E. Youtube: <br/><a href='https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7iFsKw'>Link1</a><br/><a href='https://www.youtube.com/watch?v=x9Hrn0oNmJM'>Link2</a><br/><a href='https://www.youtube.com/channel/UCZLJf_R2sWyUtXSKiKlyvAw'>Link3</a><br/><a href='https://www.youtube.com/channel/UC9fDC_eBh9e_bogw87DbGKQ'>Link4</a><br/><a href='https://www.youtube.com/channel/UC0RhatS1pyxInC00YKjjBqQ'>Link5</a><br/><a href='https://m.youtube.com/channel/UCKvwPt6BifPP54yzH99ff1g'>Link6</a><br/>  "
    },
    {
      title: "Which language?",
      content: "If possible focus on CPP or Java. Otherwise (any language of your choice)."
    },
    {
      title: "Subjects that are covered by the university or more to study?",
      content: "A. Don’t go beyond your syllabus. <br/> B. DS and Algo <br/> C. OOPS <br/> D. DBMS (ER Diagrams) <br/> E. OS <br/> F. CN <br/> G. Git commands(imp) <br/> H. Unix basics important "
    },
    {
      title: "Importance of Data Structures and Algo?",
      content: "A. Theory as well as coding questions.<br/> B. Very important like ABCD for placements. <br/> C. Binary Tree, queues <br/> D. Sorting algorithms. <br/> E. Searching Algo <br/> F. Shortest Path Algo <br/> G. Hashing <br/>"
    },
    {
      title: "Is it necessary to be thorough with all the data structures and algorithms?",
      content: "Yes"
    },
    {
      title: "If I now start solving problems on a data structure, say queue, should I go all in and try to be thorough with it or study only frequently asked questions.",
      content: "Know the concepts, but solve only frequently asked questions."
    },
    {
      title: "How to get placed for higher salary jobs?",
      content: "A. Don’t wait for a high salary job, the situation is not very favouring. <br/> B. Follow the Geek for Geeks, Leet Code resources  <br/> C.Follow the list of resources mentioned previously."
    },
    {
      title: "What one can expect in the technical rounds of the interview?",
      content: "A. Depends on the company<br/> B. Mainly the tech topics mentioned previously."
    },
    {
      title: "No of coding ques per day:",
      content: "Depends on your capacity."
    }
    // {
    //   title: "What one can expect in the technical rounds of the interview?",
    //   content: "A.<br/> B. <br/> C. <br/> D. <br/> E. <br/>F. <br/> G. <br/>"
    // }
  ]
};

const data_resume = {
  title: " About Resume ",
  rows: [
    {
      title: "Best places to create it?",
      content: " A.  <a href='https://www.overleaf.com/gallery/tagged/cv'>overleaf </a> (In case u need to have a highly customized resume. This is the best option).<br/> B.<a href ='https://novoresume.com/'>novoresume </a> ( You will get free access to create only one resume and u can edit it any number of times. So don’t go for a premium account ) "
    },
    {
      title: "What is a good resume?",
      content: "A. Only one page. <br/> B. Any resume that has “everything “ you did on your own and confident about. (i.e, no lies in resume about projects, experience, skills etc.,) <br/> C. Don’t give long descriptions of the project (2 lines max) <br/> D. Mention about the tech stack in your projects <br/> E. Mentioning Online Courses are good if you have done projects after that. (If you don’t have anything then please keep it) <br/>F. Number of Projects: 1 or 2 is good(But you should know about it in and out). But never lie about your projects. (The more you have the better it is. But do not put time-pass projects.) <br/> G. Extracurricular section: Depends on Job profile and companies. "
    },
    {
      title: "If no project to showcase is it fine?",
      content: "Please have at least one project."
    },
    {
      title: "Weightage of different things( Internships > Projects >>> ExtraCourses>CGPA)?	",
      content: "A. Minimum criteria of the CGPA must be met at any circumstances. After which it doesn’t matter.  <br/> B. Some companies also look at all the consistency through 10th, 12th and college. "
    }
  ]
};

const data_placement_proc = {
  title: " About Placement Process ",
  rows: [
    {
      title: "How important is CGPA? CGPA requirements for different tiers?",
      content: " CGPA Is important only to get shortlisted if there is a CGPA criterion <br/> T1 - 7.5 / 8 + will be eligible for almost all the companies <br/>T2 - 7.0+ <br/> T3 - 7 / 6 + "
    },
    {
      title: "Salary for different tiers?",
      content: "Super-Dream Company - 30+ <br/> T1 - 8.0 + <br/>T2 - 4.0 - 7.99 <br/> T3 -  < 3.99"
    }
  ]
};

const data_internship = {
  title: " About Internships ",
  rows: [
    {
      title: "How to get internships?",
      content: "A. Talk to professors for the internships as they have a record of companies for seniors.<br/> B. Teachers have a list of companies and their contact no. <br/> C. Keep calling all the company contact numbers HR."
    }
  ]
};

const data_time = {
  title: " About Time Management ",
  rows: [
    {
      title: "How to handle college, higher studies, placements, GATE, CAT etc. simultaneously?",
      content: "A. First of all, be clear about what you need to do like a job or higher studies or M.Tech or MBA. Don’t try to do everything at once. Don’t travel in multiple paths at once. ( Once you set your path then automatically u will be able to handle anything).<br/> B. Set schedules."
    }
  ]
};



function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="https://i.postimg.cc/QM4KvYxL/placement.png" alt= "" width="150px" height="150px"></img>
        <h1>FAQs for Placements and Interviews </h1>
      </div>
      <div className="Content">
        <div styles={{ padding : '20px'}}>
          <Faq data={data_placement_prep} styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '50px',
                      arrowColor: "black",
                      }} />
        </div>
        <br/>
        <div>
          <Faq data={data_resume} styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '50px',
                      arrowColor: "black",
                      }} />
        </div>
        <br/>
        <div>
          <Faq data={data_placement_proc} styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '50px',
                      arrowColor: "black",
                      }} />
        </div>
        <br/>
        <div>
          <Faq data={data_internship} styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '50px',
                      arrowColor: "black",
                      }} />
        </div>
        <br/>
        <div>
          <Faq data={data_time} styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '50px',
                      arrowColor: "black",
                      }} />
        </div>
      </div>
      <div className="Footer">
        <h3>For any queries contact us here</h3>
        <a href="https://chat.whatsapp.com/JSdeJzUWICK8h9FzXza1YA ">
          <img src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png" alt="whatsapp" width="80px" height = "80px">

          </img>
        </a>
      </div>
    </div>
  );
}

export default App;
