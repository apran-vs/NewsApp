import React from "react";

function AboutUs() {
    return (
        <div>
            <h1
                className="text-center"
                style={{ margin: "35px 0px", marginTop: "90px" }}
            >
                About Us
            </h1>
            <div className="m-5">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                About Author
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error quod commodi maxime dolor officia sed adipisci, deserunt, quis fugiat eos possimus voluptas voluptatum atque modi molestias exercitationem. Placeat, necessitatibus.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                About App
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum reiciendis recusandae, dignissimos similique tenetur exercitationem necessitatibus eum? Quae veniam iusto repellat omnis impedit ea, laborum repellendus quisquam iure nihil?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
