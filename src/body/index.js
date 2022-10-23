import "./styles.css"

export default function Body() {
    return (
        <div>
            <div>
                <div>
                    <h2 style={{ borderBottom: "1px solid black" }}>SUMMARY</h2>
                    <p>
                        I am a Front End Developer with a desire to learn and grow. Passionate about learning and building delightful and
                        scalable web applications. Experienced Web Developer specialized in front end development. Experienced with all
                        stages of development life cycle for dynamic web projects. Well-Versed in numerous web technologies including
                        JavaScript, ReactJS, TypeScipt, HTML, CSS ,etc., Dynamic professional with effective teamwork skills. Deliver
                        high-quality results on time to the organization.
                    </p>
                </div>
                <div>
                    <div>
                        <h2 style={{ borderBottom: "1px solid black" }}>EDUCATION</h2>
                        <h4> Hanoi University of Civil Engineering</h4>
                        <p>*Major: Software technology</p>
                        <p>*Ranking: Not graduated</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 style={{ borderBottom: "1px solid black" }}>WORK EXPERIENCE</h2>
                        <div className="name-skill">
                            <h4> ITSOLT (Intern Java)</h4>
                            <p style={{fontStyle: "italic" , fontSize: "14px"}}>(08/2021 - 10/2021)</p>
                            <p>*Study:</p>
                            <p>- Java core, OOP, SQL, JDBC/Hibernate
                            </p>
                        </div>
                        <div>
                            <h4> NOBISOFT(Intern Front-end)</h4>
                            <p style={{fontStyle: "italic", fontSize: "14px"}}>(02/2022 - Now)</p>
                            <p>*Study:</p>
                            <p>- HTML/CSS/JavaScript & TypeScript, ReactJS & NextJS
                            </p>
                        </div>
                    </div>
                </div>(
                <div>
                    <div>
                        <h2 style={{ borderBottom: "1px solid black" }}>PROJECTS</h2>
                        <div>
                            <h3>CHO DAI TU THAI NGUYEN ( NOBISOFT HA NOI)</h3>
                            <p style={{fontStyle: "italic", fontSize: "14px"}}>(03/2022 - 04/2022)</p>
                            <div style={{ margin: "0px 20px" }}>
                                <p style={{fontStyle: "italic"}}>Intern Front-end</p>
                                <div>
                                    <h4>1. Objective:</h4>
                                    <p>To build a market management system:</p>
                                    <p> - Building a market management system:Manage the news of markets, small businesses, kiosks.</p>
                                    <p> - Open kiosks, update kiosk rental vendors, manage kiosks in the market and in the market.</p>
                                </div>
                                <div>
                                    <h4>2. Customer:</h4>
                                    <p> - Thai Nguyen pronoun market</p>
                                </div>
                                <div>
                                    <h4>3. Responsibilities:</h4>
                                    <p> - Develop a few front-end modules that are SRS (Software Requirements Specification) compliant.</p>
                                    <p> - Bug Fix</p>
                                </div>
                                <div>
                                    <h4>4. Technology:</h4>
                                    <p> - Front-end: ReactJs framework, Ant Design library, Recoil, Axios, GraphQL, ...</p>
                                    <p> - Backend: NodeJs, NestJs framework</p>
                                    <p> - DB: MySQL.</p>
                                </div>
                                <div>
                                    <h4>5. Team size: (5 members)</h4>
                                    <p> - BA: 1 members.</p>
                                    <p> - Front-end: 2 members.</p>
                                    <p> - Backend: 2 members</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3> QUOTATION SYSTEM ( NOBISOFT HA NOI)</h3>
                            <p style={{fontStyle: "italic", fontSize: "14px"}}>(05/2022 - 09/2022)</p>

                            <div style={{ margin: "0px 20px" }}>
                                <p style={{fontStyle: "italic"}}>Front-end team member</p>
                                <div>
                                    <h4>1. Objective:</h4>
                                    <p>Building a quotation management system:</p>
                                    <p> - Managers of products, suppliers, employees and customers.</p>
                                    <p> - Besides, the system manages the quotations of other suppliers.</p>
                                    <p> - Manage orders as well as products according to the proposed formula...</p>
                                    <p> - The system updates suppliers, units, formula types, connection types, origin, units, thicknesses, lines. glasses,...
                                        of the products quoted.</p>
                                    <p> - Customers create a list of products they want to know the price of. They then send samples of their products
                                        toget a quoteSuppliers will check the requirements from the customer and then send the quotation back to the
                                        customerThe system allows customers to ask suppliers to manufacture products on demand and receive quotes.
                                    </p>
                                </div>
                                <div>
                                    <h4>2. Customer:</h4>
                                    <p> - Minh Triet Company.</p>
                                </div>
                                <div>
                                    <h4>3. Responsibilities:</h4>
                                    <p> - Develop a few front-end modules that are SRS (Software Requirements Specification) compliant.</p>
                                    <p> - Bug Fix</p>
                                </div>
                                <div>
                                    <h4>4. Technology:</h4>
                                    <p> - Front-end: NextJs framework, Ant Design library, Recoil, Axios, GraphQL, ...</p>
                                    <p> - Backend: .NET core</p>
                                    <p> - DB: MySQL.</p>
                                </div>
                                <div>
                                    <h4>5. Team size: (10 members)</h4>
                                    <p> - BA: 2 members.</p>
                                    <p> - QA/QC: 1 member</p>
                                    <p> - Front-end: 4 members.</p>
                                    <p> - Backend: 3 members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 style={{ borderBottom: "1px solid black" }}>SKILLS</h2>
                        <div className="skill-profile">
                            <div className="name-skill">
                                <p>Front-end </p>
                            </div>
                            <div className="contact-skill">
                                <p> - Languages: JavaScript & TypeScript, HTML, CSS.</p>
                                <p> - Frameworks/Platforms: ReactJs, NextJs, Ant Design, Boostraps, Axios,
                                    RESTful API, GraphQL.</p>
                            </div>
                        </div>
                        <div className="skill-profile">
                            <div className="name-skill">
                                <p>Back-end (basic) </p>
                            </div>
                            <div className="contact-skill">
                                <p> - Languages: Java core, NodeJs</p>
                                <p> - Frameworks: Express, GraphQL/Apollo</p>
                                <p> - Database: MySql, MongoDB</p>
                            </div>
                        </div>

                        <div className="skill-profile">
                            <div className="name-skill">
                                <p>Other </p>
                            </div>
                            <div className="contact-skill">
                                <p> - Git, GitHub, Jira.</p>
                            </div>
                        </div>

                        <div className="skill-profile">
                            <div className="name-skill">
                                <p>Languages </p>
                            </div>
                            <div className="contact-skill">
                                <p> - I can read some documents in English. Find and solve any problem using
                                    Foreign documents with supporting tools</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 style={{ borderBottom: "1px solid black" }}>FAVOURITE</h2>
                        <div>
                            <p> - Game</p>
                            <p> - Play Football</p>
                            <p> - Travel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}