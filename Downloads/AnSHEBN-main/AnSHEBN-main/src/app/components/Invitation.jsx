import React from "react";

const Invitation = () => {

    return(
        <div className="flex items-center px-10 py-4 rounded-2xl bg-[url(/images/profile/fondo-inferior.png)] bg-center bg-no-repeat mt-4">
            <div>
                <p className="text-2xl font-semibold">Discover and collaborate with talented women from around the world</p>
                <br />
                <p className="text-lg">Join us to share skills, opportunities, and insights that empower and elevate our comunity!</p>
            </div>
            <div className="mx-12">
                <img className="w-38 h-40" src="/images/profile/image-2.png" alt="" />
            </div>
        </div>
    );
};

export default Invitation;