import React from 'react';
import { avatar } from '../../assets/avatar';
import { Button } from '../Button';
import { caretDown } from '../../assets/caretDown';
import { question } from '../../assets/question';
import { listOl } from '../../assets/listOl';
import { eye } from '../../assets/eye';
import { Candicates } from '../../FakeDatas/Candicates';
import { useSelector } from 'react-redux';

export const CandicateList: React.FC = () => {
  const searchTerm = useSelector((state) => state);

  const filteredCandicates = Candicates.filter((el) =>
    el.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      {filteredCandicates.map((el, i) => (
        <div className="h-[220px] w-full bg-grayBackground mt-2 rounded-md overflow-hidden">
          <div className="border border-l-4 h-full w-full rounded-md hover:border-softBlue flex transition-colors duration-300">
            <div className="h-full w-8">
              <div className="flex justify-end pt-10">
                <input type="checkbox" />
              </div>
            </div>
            <div className="grid grid-cols-4 w-full py-4">
              <div>
                <div className="rounded-full overflow-hidden border-2 border-blue-700 aspect-square w-[60px] ml-4">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="candicate-list-header2">{el.name}</div>
                <div className="candicate-list-alt2">{el.location}</div>
                <div className="candicate-list-alt2">
                  {el.sex + ', ' + el.age}
                </div>
                <div className="candicate-list-alt2">{el.current}</div>
                <div className="flex">
                  <div className="text-sm text-gray-400">{el.date + ' /'}</div>
                  <div className="text-sm text-blue-600">{el.status}</div>
                </div>
                <div>
                  <div className="bg-blue-600 h-4 w-20 rounded flex justify-center mt-2">
                    <div className="text-[9px] text-white text-center">
                      1 Başvuru
                    </div>
                    <img src={caretDown} alt="caretdown" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="candicate-list-header1">{el.education}</div>
                <div className="candicate-list-alt1">{el.school}</div>
                <div className="candicate-list-alt1">{el.graduate}</div>
              </div>
              <div className="flex flex-col justify-center pl-20">
                <div className="candicate-list-header1">{el.job}</div>
                <div className="candicate-list-alt1">{el.company}</div>
                <div className="candicate-list-alt1">{el.finishAndEndDate}</div>
              </div>
              <div className="flex flex-col justify-center items-center pl-20">
                <div className="h-10 w-10">
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    icon={question}
                  />
                </div>
                <div className="h-10 w-10">
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    icon={listOl}
                  />
                </div>
                <div className="h-10 w-10">
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    icon={eye}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
