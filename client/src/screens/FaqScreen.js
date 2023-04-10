import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        },
        {
            title: "Why do we use it?",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            title: "Where does it come from?",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."
        },
        {
            title: "How is it Generated?",
            content: "A wide range of online generators can be used to create the lorem ipsum with a single click. Here’s one to try out for your next project: https://loremipsum.io/. There’s a generator for the classic lorem ipsum, as well as for more humorous placeholder texts: hipster ipsum, zombie ipsum, pokeipsum and many more!"
        },
        {
            title: "Where can I get some?",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }]
}

const FAQScreen = (props) => {
    return (
        <div className='container'>
            <Faq data={data}
                styles={{
                    bgColor: "white",
                    titleTextColor: "#48482a",
                    rowTitleColor: "#78789a",
                    rowTitleTextSize: 'large',
                    rowContentColor: "#48484a",
                    rowContentTextSize: '16px',
                    rowContentPaddingTop: '10px',
                    rowContentPaddingBottom: '10px',
                    rowContentPaddingLeft: '50px',
                    rowContentPaddingRight: '150px',
                    arrowColor: "black",
                }} />
        </div>
    )
}

export default FAQScreen;