document.addEventListener("DOMContentLoaded", () => {
  const myTasks = new Task();

  const existingTasks = myTasks.getTasks();
  const taskWrapper = document.getElementById("taskWrapper");
  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");

  function capitalizeFirstChar(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function formatDate(userFriendlyDate: string) {
    const date = new Date(userFriendlyDate);
    const options = {
      day: "numeric" as const,
      month: "long" as const,
      year: "numeric" as const,
    };
    return date.toLocaleDateString("en-GB", options);
  }

  const displayAllTasks = (task = existingTasks) => {
    if (task.length <= 0) {
      taskWrapper.className = "hidden";
      // window.location.reload();
    } else {
      taskWrapper.innerHTML = "";
      taskWrapperEmpty.className = "hidden";

      task.forEach((element) => {
        const userFriendlyDate = formatDate(element.createdAt);
        const itemTask = document.createElement("div");
        itemTask.className =
          "flex justify-between bg-white p-5 w-full rounded-3xl";
        itemTask.innerHTML = `<div class="flex justify-between bg-white p-5 w-full rounded-3xl">
          <div class="task-card flex flex-col gap-5">
              <div class="flex gap-3 items-center">
                  <div
                      class="w-[50px] h-[50px] flex shrink-0 items-center justify-center bg-[#BDEBFF] rounded-full">
                      <img src="img/icons/ghost.svg" alt="icon">
                  </div>
                  <div class="flex flex-col">
                      <p class="font-bold text-lg leading-[27px]">${capitalizeFirstChar(
                        element.taskName
                      )}</p>
                      <p class="text-sm leading-[21px] text-taskia-grey">Created at ${userFriendlyDate}</p>
                  </div>
              </div>
              <div class="flex gap-4 font-semibold text-sm leading-[21px]">
                  <div class="flex gap-1 items-center">
                      <div class="flex shrink-0 w-5 h-5">
                          <img src="img/icons/layer.svg" alt="icon">
                      </div>
                      <p>High</p>
                  </div>
                  ${
                    element.isCompleted
                      ? `<div class="flex gap-1 items-center text-taskia-green">
                  <div class="flex shrink-0 w-5 h-5">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                              d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                              stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
                  <p>Completed</p>
              </div>`
                      : `<div class="flex gap-1 items-center">
              <div class="flex shrink-0 w-5 h-5">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                          d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                          stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </div>
              <p>In Progress</p>
          </div>`
                  }
              </div>
          </div>
          <div class="flex flex-row items-center gap-x-3">
          ${
            element.isCompleted
              ? `<a href="#"
          class="my-auto font-semibold text-taskia-red border border-taskia-red p-[12px_20px] h-12 rounded-full">Delete</a>
          <a href="#" id="takeTask-${element.id}"
          class="flex gap-[10px] justify-center items-center text-white p-[12px_20px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">Take</a>
          `
              : `<a href="#"
          class="my-auto font-semibold text-taskia-red border border-taskia-red p-[12px_20px] h-12 rounded-full">Delete</a>
          <a href="#" id="takeTask-${element.id}"
          class="flex gap-[10px] justify-center items-center text-white p-[12px_20px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">Take</a>`
          }
              
          </div>
      </div>
      `;
        taskWrapper.appendChild(itemTask);
        itemTask
          .querySelector(`#takeTask-${element.id}`)
          .addEventListener("click", (e: Event) => {
            e.preventDefault();
            myTasks.takeTask(element.id);
            const updateTask = myTasks.getTasks();
            displayAllTasks(updateTask);
          });
      });
    }
  };
  displayAllTasks();
});
