export default function Breadcrumbs({ blok }) {
    return (
      <nav className="text-sm font-medium text-gray-500 bg-gray-50 pl-3">
        <ol className="list-none p-0 inline-flex">
          {blok.Links.map((linkItem, index) => (
            <li className="flex items-center" key={linkItem._uid}>
              {index !== blok.Links.length - 1 ? (
                <>
                  <a href={linkItem.LinkURL.cached_url} className="hover:text-gray-700">
                    {linkItem.LinkName}
                  </a>
                  <span className="mx-2">{'>'}</span>
                </>
              ) : (
                <span>{linkItem.LinkName}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
  