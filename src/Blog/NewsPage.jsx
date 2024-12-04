import React from 'react';
import { Link } from 'react-router-dom';

function NewsPage() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people standing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/aZpa6qy64uJ9IFXWLIIIyTvNQWEQyya13rb9v29iMUQaRo9E.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Kamis, 24 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>10 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                <Link to="/blog/detailblog">
                Read More
                </Link>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three people holding a large check"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/o6qJrP3DslYrNZC2eqVmZSCfnJVTQuOg9Xv9NNrmNe7ZLCtnA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Sabtu, 20 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>20 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people posing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/8PksT0eSdhW2cyZXzyJoizpkgKITeKUAtz5JqCC07ytqFh2TA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Rabu, 20 November 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>5 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people standing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/aZpa6qy64uJ9IFXWLIIIyTvNQWEQyya13rb9v29iMUQaRo9E.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Kamis, 24 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>10 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three people holding a large check"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/o6qJrP3DslYrNZC2eqVmZSCfnJVTQuOg9Xv9NNrmNe7ZLCtnA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Sabtu, 20 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>20 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people posing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/8PksT0eSdhW2cyZXzyJoizpkgKITeKUAtz5JqCC07ytqFh2TA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Rabu, 20 November 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>5 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people standing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/aZpa6qy64uJ9IFXWLIIIyTvNQWEQyya13rb9v29iMUQaRo9E.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Kamis, 24 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>10 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 8 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three people holding a large check"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/o6qJrP3DslYrNZC2eqVmZSCfnJVTQuOg9Xv9NNrmNe7ZLCtnA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Sabtu, 20 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>20 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 9 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people posing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/8PksT0eSdhW2cyZXzyJoizpkgKITeKUAtz5JqCC07ytqFh2TA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Rabu, 20 November 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>5 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 10 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people standing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/aZpa6qy64uJ9IFXWLIIIyTvNQWEQyya13rb9v29iMUQaRo9E.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Kamis, 24 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>10 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 11 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three people holding a large check"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/o6qJrP3DslYrNZC2eqVmZSCfnJVTQuOg9Xv9NNrmNe7ZLCtnA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Sabtu, 20 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>20 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 12 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people posing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/8PksT0eSdhW2cyZXzyJoizpkgKITeKUAtz5JqCC07ytqFh2TA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Rabu, 20 November 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>5 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 13 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people standing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/aZpa6qy64uJ9IFXWLIIIyTvNQWEQyya13rb9v29iMUQaRo9E.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Kamis, 24 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>10 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 14 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three people holding a large check"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/o6qJrP3DslYrNZC2eqVmZSCfnJVTQuOg9Xv9NNrmNe7ZLCtnA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Sabtu, 20 Oktober 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>20 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* News Item 15 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of people posing in front of a blue background with text"
              className="w-full h-48 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/8PksT0eSdhW2cyZXzyJoizpkgKITeKUAtz5JqCC07ytqFh2TA.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Rabu, 20 November 2024</span>
                <i className="far fa-comments ml-4 mr-2"></i>
                <span>5 comment</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia</h2>
              <a className="text-blue-600 hover:underline flex items-center" href="#">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
