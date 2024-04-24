import {marked} from "marked";
// import remarkGfm from "remark-gfm";
import {remark} from "remark";
import remarkGfm from "remark-gfm";

const Message = ({ message, isUser }) => {
  let containerClass = "bg-gray-50";
  if (isUser) {
    containerClass = "bg-blue-50";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  return (
    <div
      className={`flex gap-x-4 rounded-md ${containerClass} py-5 px-5 mb-12 items-center`}
    >
      {isUser ? (
        <span className="sm:text-xl rounded p-2 text-base h-4 flex items-center mt-1" title="user">
          You:
        </span>
      ) : (
        <span className="text-xl sm:text-2xl" title="AI">
          <img src={"https://www.ed-fi.org/wp-content/themes/joints/assets/images/logos/logo.png"} width={75}/>
        </span>
      )}

      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        {message.split("\n").map(
          (text, index) =>
            text.length > 0 && (
                  <span key={index} className="min-w-0" dangerouslySetInnerHTML={{__html: marked(text)}} />
            )
        )}
      </div>
    </div>
  );
};

export default Message;
