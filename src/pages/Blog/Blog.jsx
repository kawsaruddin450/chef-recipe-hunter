import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl mt-28 mb-12 text-center'>Blog Page</h1>
            <hr className='border-b-1 border-green-300 mb-12' />
            <div className='mb-12 lg:container mx-auto'>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is the difference between uncontrolled and controlled components?</div>
                    <div className="collapse-content">
                        <p>Uncontrolled elements are the elements that are not controlled by the react state and are handled by the DOM(Document Object Model). So in order to access any values that are entered we use refs.
                            <br /><br />
                            Controlled components are those in which form's data is handled by the components state. It takes the current values through props and make changes through callbacks like onClick, onChange etc. A parent component magages its own state and passes the new values as props to controlled components.
                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">What's the difference between Node.js and express js?</div>
                    <div className="collapse-content">
                        <p>Node is an open source and cross-platform runtime environment for executing javascript code outside of a browser. NodeJs is not a framework and it's not a programming language.We often use node.js for building back end services like APIs for web apps or mobile apps.
                            <br /><br />
                            Express is a small framework that sits on top of Node Js's web server functionality to simplify its APIs and add new helpful features. It makes it easier to organize your application's functionality with middleware and routing. It adds helpful utilities to Node Js's HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">What is a custom hook, and why will you create a custom hook?</div>
                    <div className="collapse-content">
                        <p>We know that hooks like useState and useEffect are reusable components. Sometimes we make components that we have to reuse again and again and again in the application. in this case, we convert the component to hooks by extracting logics from it.
                            <br />
                            The main reason why we should be using custom hooks is to maintain the concept of DRY(Don't Repeat Yourself) in our react application.For example, suppose we have some logic that makes use of some built-in hooks and we need to use the logic in multiple functional components. So, the easier way to do it is to create a separate function that wraps the logic inside it and then call it from those components. Here, the separate function we created is the custom hook.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;