import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ list, menuBtn, onClick }) {
	return (
		<Menu as="div" className="relative inline-block text-left mt-0.5">
			<div>
				<Menu.Button className="inline-flex items-center mt-[1px] w-full rounded-md transition bg-[#282828] p-1 text-sm hover:border border-solid border-br-light opacity-80">
					{menuBtn() ?? (
						<BsThreeDotsVertical
							size={18}
							className="cursor-pointer"
							color="black"
						/>
					)}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute -right-[11px] z-10 mt-5 w-40 origin-top-right divide-y divide-gray-100 rounded-br-md rounded-bl-md bg-[#282828] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
					{list?.length > 0 &&
						list?.map((item, idx) => {
							return (
								<div className="" key={idx}>
									<Menu.Item>
										{({ active }) => (
											<div
												className={classNames(
													active
														? "bg-[#444] text-neutral-200"
														: "text-neutral-200",
													"block px-4 py-3 text-sm"
												)}
												onClick={onClick}
											>
												{item}
											</div>
										)}
									</Menu.Item>
								</div>
							);
						})}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
