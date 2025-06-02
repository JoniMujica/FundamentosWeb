export const helperHttp = ()=>{
    
    const customFetch = (endpoint,options)=> {
      const defaultHeader = {
        accept: "application/json",
      };

      const controller = new AbortController();
      options.signal = controller.signal;

      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;

      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;

      //console.log(options);
      //controller.abort();
      setTimeout(() => controller.abort(), 9000);

      return fetch(endpoint, options)
        .then((res) => {
          return res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrio un error",
              });
        })
        .catch((err) => {
          //console.log(err);
          return err;
        });
    }

    const get = (url,options={}) => customFetch(url,options);
    const post = (url,options={}) =>{
        options.method = "POST";
        console.log(options);
        
        return customFetch(url,options)
    }
    const put = (url,options={}) =>{
        options.method = "PUT";
        return customFetch(url,options)
    }
    const del = (url,options={}) =>{
        options.method = "DELETE";
        return customFetch(url,options)
    }

    return{
        get,post,put,del
    }
}