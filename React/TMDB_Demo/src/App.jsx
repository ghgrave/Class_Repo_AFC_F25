import axios from "axios";
import { useEffect, useState } from "react";
import {
    InformationCircleIcon as InfoOutline,
    HeartIcon as HeartOutline,
    HandThumbUpIcon as ThumbUpOutline,
    HandThumbDownIcon as ThumbDownOutline,
} from "@heroicons/react/24/outline";

import {
    InformationCircleIcon as InfoSolid,
    HeartIcon as HeartSolid,
    HandThumbUpIcon as ThumbUpSolid,
    HandThumbDownIcon as ThumbDownSolid,
} from "@heroicons/react/24/solid";

const App = () => {
    const [movieArray, setMovieArray] = useState([]);
    const [flippedIndex, setFlippedIndex] = useState(null);

    function formatReleaseDate(dateString) {
        if (!dateString) return "date unknown";

        const date = new Date(dateString);
        const options = { month: "short" }; // gives "Oct"
        const month = new Intl.DateTimeFormat("en-US", options).format(date);
        const day = date.getDate();
        const year = date.getFullYear();

        // Add ordinal suffix (st, nd, rd, th)
        const suffix =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";

        return `${month} ${day}${suffix}, ${year}`;
    }

    useEffect(() => {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/now_playing",
            params: { language: "en-US", page: "1" },
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`,
            },
        };

        axios
            .request(options)
            .then((res) => setMovieArray(res.data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold text-center my-6">Now Playing</h1>

            <div className="flex flex-col gap-6 items-center">
                {movieArray.map((predicate, index) => (
                    <div
                        key={predicate.id}
                        className="max-w-3xl flex w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition hover:shadow-lg"
                    >
                        {/* Poster (left) */}
                        <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 w-1/3">
                            <img
                                src={`https://image.tmdb.org/t/p/w342${predicate.poster_path}`}
                                alt={predicate.title || "Poster"}
                                loading="lazy"
                                className="max-h-64 w-auto object-contain"
                            />
                        </div>

                        {/* Flip Section (right) */}
                        <div
                            className="relative w-2/3 h-64 perspective hover:shadow-deep transition-transform duration-300 rounded-md"
                            onMouseLeave={() => setFlippedIndex(null)}
                            onClick={() =>
                                setFlippedIndex(flippedIndex === index ? null : index)
                            }
                        >
                            <div
                                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                                    flippedIndex === index ? "rotate-x-180" : ""
                                } hover:shadow-deep`}
                            >
                                {/* FRONT SIDE */}
                                <div className="absolute w-full h-full backface-hidden bg-white p-4 text-left rounded-md">
                                    <h2 className="text-slate-900 text-lg font-semibold">
                                        {predicate.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm italic mb-2">
                                        Released: {formatReleaseDate(predicate.release_date)}
                                    </p>
                                    <p className="text-slate-700 text-sm line-clamp-4">
                                        {predicate.overview || "No summary available."}
                                    </p>

                                    <div className="flex justify-start gap-5 mt-3">
                                        {/* Info */}
                                        <div className="group relative cursor-pointer">
                                            <InfoOutline className="h-6 w-6 text-sky-600 group-hover:hidden transition duration-150" />
                                            <InfoSolid className="h-6 w-6 text-sky-800 hidden group-hover:block transition duration-150" />
                                        </div>
                                        {/* Favorite */}
                                        <div className="group relative cursor-pointer">
                                            <HeartOutline className="h-6 w-6 text-rose-500 group-hover:hidden transition duration-150" />
                                            <HeartSolid className="h-6 w-6 text-rose-700 hidden group-hover:block transition duration-150" />
                                        </div>
                                        {/* Like */}
                                        <div className="group relative cursor-pointer">
                                            <ThumbUpOutline className="h-6 w-6 text-emerald-600 group-hover:hidden transition duration-150" />
                                            <ThumbUpSolid className="h-6 w-6 text-emerald-800 hidden group-hover:block transition duration-150" />
                                        </div>
                                        {/* Dislike */}
                                        <div className="group relative cursor-pointer">
                                            <ThumbDownOutline className="h-6 w-6 text-orange-500 group-hover:hidden transition duration-150" />
                                            <ThumbDownSolid className="h-6 w-6 text-orange-700 hidden group-hover:block transition duration-150" />
                                        </div>
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div className="absolute w-full h-full backface-hidden rotate-x-180 bg-slate-50 p-4 overflow-y-auto rounded-md shadow-inner">
                                    <h3 className="text-slate-900 font-semibold mb-2">
                                        More Details
                                    </h3>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tincidunt, velit non tempor malesuada, odio sem
                                        aliquam nisl, sed porta massa turpis nec sapien. Duis
                                        sagittis felis nec tortor interdum pretium. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia curae; Integer imperdiet ligula non quam cursus,
                                        vitae egestas lacus sagittis. Curabitur imperdiet pulvinar
                                        justo, ac blandit metus vulputate eu. Sed interdum, nibh vel
                                        commodo sodales, urna lorem vestibulum sem, at condimentum
                                        felis urna vel erat. Pellentesque ac elementum justo. Fusce
                                        bibendum erat nec nisi dignissim tempor. Suspendisse in
                                        volutpat libero. Cras commodo, felis ut tincidunt laoreet,
                                        enim neque cursus turpis, nec iaculis lorem mi sed ante. In
                                        porta mauris vel nulla interdum, eget posuere libero
                                        laoreet. Integer sed faucibus purus, eget posuere augue.
                                        Maecenas dapibus gravida feugiat. In hac habitasse platea
                                        dictumst. Nulla facilisi. Nunc bibendum mattis diam ut
                                        vehicula.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;
