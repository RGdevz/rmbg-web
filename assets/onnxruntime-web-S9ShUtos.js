/*!
 * ONNX Runtime Web v1.20.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var oa=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,hf=Object.getOwnPropertyNames,ff=Object.prototype.hasOwnProperty,mf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),M=(e,t)=>()=>(e&&(t=e(e=0)),t),Zt=(e,t)=>{for(var r in t)oa(e,r,{get:t[r],enumerable:!0})},gf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of hf(t))!ff.call(e,a)&&a!==r&&oa(e,a,{get:()=>t[a],enumerable:!(i=cf(t,a))||i.enumerable});return e},kr=e=>gf(oa({},"__esModule",{value:!0}),e),Ut,ut,Ot,es,ua,la=M(()=>{Ut=new Map,ut=[],Ot=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Ut.get(e);if(i===void 0)Ut.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=ut.indexOf(e);a!==-1&&ut.splice(a,1);for(let n=0;n<ut.length;n++)if(Ut.get(ut[n]).priority<=r){ut.splice(n,0,e);return}ut.push(e)}return}throw new TypeError("not a valid backend")},es=async e=>{let t=Ut.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ua=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?ut:r,a,n=[],s=new Set;for(let d of i){let p=await es(d);typeof p=="string"?n.push({name:d,err:p}):(a||(a=p),a===p&&s.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),yf=M(()=>{la()}),_l,$f=M(()=>{_l="1.20.0"}),oi,Ue,bl=M(()=>{$f(),oi="warning",Ue={wasm:{},webgl:{},webgpu:{},versions:{common:_l},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);oi=e}},get logLevel(){return oi}},Object.defineProperty(Ue,"logLevel",{enumerable:!0})}),ge,wf=M(()=>{bl(),ge=Ue}),vl,xl,_f=M(()=>{vl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let h=n*a,u=0,m=h,g=h*2,$=-1;s==="RGBA"?(u=0,m=h,g=h*2,$=h*3):s==="RGB"?(u=0,m=h,g=h*2):s==="RBG"&&(u=0,g=h,m=h*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let v=(e.data[u++]-p[0])*d[0],_=(e.data[m++]-p[1])*d[1],S=(e.data[g++]-p[2])*d[2],k=$===-1?255:(e.data[$++]-p[3])*d[3];i.fillStyle="rgba("+v+","+_+","+S+","+k+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},xl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,h;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?h=[0,0,0,0]:typeof d.bias=="number"?h=[d.bias,d.bias,d.bias,d.bias]:(h=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(h[3]=d.bias[3]));let u=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,$=1,y=2,x=3,v=0,_=u,S=u*2,k=-1;l==="RGBA"?(v=0,_=u,S=u*2,k=u*3):l==="RGB"?(v=0,_=u,S=u*2):l==="RBG"&&(v=0,S=u,_=u*2),i=r.createImageData(a,n);for(let I=0;I<n*a;g+=m,$+=m,y+=m,x+=m,I++)i.data[g]=(e.data[v++]-h[0])*p[0],i.data[$]=(e.data[_++]-h[1])*p[1],i.data[y]=(e.data[S++]-h[2])*p[2],i.data[x]=k===-1?255:(e.data[k++]-h[3])*p[3]}else throw new Error("Can not access image data");return i}}),pr,Sl,kl,El,Il,bf=M(()=>{da(),pr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,h=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),u=4,m=0,g=1,$=2,y=3,x=0,v=p,_=p*2,S=-1;l==="RGB"&&(u=3,m=0,g=1,$=2,y=-1),d==="RGBA"?S=p*3:d==="RBG"?(x=0,_=p,v=p*2):d==="BGR"&&(_=0,v=p,x=p*2);for(let k=0;k<p;k++,m+=u,$+=u,g+=u,y+=u)h[x++]=(e[m]+s[0])/n[0],h[v++]=(e[g]+s[1])/n[1],h[_++]=(e[$]+s[2])/n[2],S!==-1&&y!==-1&&(h[S++]=(e[y]+s[3])/n[3]);return d==="RGBA"?new Ge("float32",h,[1,4,r,i]):new Ge("float32",h,[1,3,r,i])},Sl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=h=>h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=d();h.width=e.width,h.height=e.height;let u=p(h);if(u!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=g}else l.tensorFormat="RGBA",l.height=m,l.width=g;u.drawImage(e,0,0),s=u.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let h,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,u=t.resizedWidth):(h=e.height,u=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=h,l.width=u,t!==void 0){let m=d();m.width=u,m.height=h;let g=p(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,u,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=d();h.width=e.width,h.height=e.height;let u=p(h);if(u!=null){let m=e.height,g=e.width;return u.drawImage(e,0,0,g,m),s=u.getImageData(0,0,g,m).data,l.height=m,l.width=g,pr(s,l)}else throw new Error("Can not access image data")}else{if(n)return new Promise((h,u)=>{let m=d(),g=p(m);if(!e||!g)return u();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{m.width=$.width,m.height=$.height,g.drawImage($,0,0,m.width,m.height);let y=g.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,h(pr(y.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return pr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},kl=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Ge({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},El=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ge({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Il=(e,t,r)=>new Ge({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),xt,Ft,ui,zl,vf=M(()=>{xt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ft=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ui=!1,zl=()=>{if(!ui){ui=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(xt.set("int64",BigInt64Array),Ft.set(BigInt64Array,"int64")),t&&(xt.set("uint64",BigUint64Array),Ft.set(BigUint64Array,"uint64")),r?(xt.set("float16",Float16Array),Ft.set(Float16Array,"float16")):xt.set("float16",Uint16Array)}}}),Tl,Cl,xf=M(()=>{da(),Tl=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Cl=(e,t)=>{switch(e.location){case"cpu":return new Ge(e.type,e.data,t);case"cpu-pinned":return new Ge({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ge({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ge({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ge,da=M(()=>{_f(),bf(),vf(),xf(),Ge=class{constructor(e,t,r){zl();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=xt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=xt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Ft.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let n=Tl(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Sl(e,t)}static fromTexture(e,t){return kl(e,t)}static fromGpuBuffer(e,t){return El(e,t)}static fromPinnedBuffer(e,t,r){return Il(e,t,r)}toDataURL(e){return vl(this,e)}toImageData(e){return xl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Cl(this,e)}}}),Oe,pa=M(()=>{da(),Oe=Ge}),Er,li,Je,Fe,Al=M(()=>{bl(),Er=(e,t)=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.timeStamp(`${e}::ORT::${t}`)},li=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Er("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Je=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||li("BEGIN",e)},Fe=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||li("END",e)}}),Ol,Sf=M(()=>{la(),pa(),Al(),Ol=class Rl{constructor(t){this.handler=t}async run(t,r,i){Je();let a={},n={};if(typeof t!="object"||t===null||t instanceof Oe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(h.indexOf(u)!==-1){let m=r[u];(m===null||m instanceof Oe)&&(p=!0,s=!1,a[u]=m)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let l=await this.handler.run(t,a,n),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let h=l[p];h instanceof Oe?d[p]=h:d[p]=new Oe(h.type,h.data,h.dims)}return Fe(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){Je();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,u=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(m=t.byteLength-u,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||u+m>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-u}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(h,u,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await ua(s),p=await l.createInferenceSessionHandler(n,d);return Fe(),new Rl(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Bl,kf=M(()=>{Sf(),Bl=Ol}),Ef=M(()=>{}),If=M(()=>{}),zf=M(()=>{}),Tf=M(()=>{}),ts,Dl,Cf=M(()=>{la(),pa(),ts="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Dl=class Ml{constructor(t,r,i){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=i}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let i=t.evalModel||"",a=t.optimizerModel||"",n=r||{},[s,l]=await ua(n);if(s.createTrainingSessionHandler){let d=await s.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,a,l);return new Ml(d,!!t.optimizerModel,!!t.evalModel)}else throw new Error(ts)}typeNarrowingForRunStep(t,r,i,a,n){let s={},l={};if(typeof i!="object"||i===null||i instanceof Oe||Array.isArray(i))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let p of a){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);s[p]=null}if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(a);for(let u of r)if(h.indexOf(u)!==-1){let m=a[u];(m===null||m instanceof Oe)&&(p=!0,d=!1,s[u]=m)}if(p){if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else l=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of t)if(typeof i[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(d)for(let p of r)s[p]=null;return[s,l]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let i in t)if(Object.hasOwnProperty.call(t,i)){let a=t[i];a instanceof Oe?r[i]=a:r[i]=new Oe(a.type,a.data,a.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,i){let[a,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,i),s=await this.handler.runTrainStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,i){if(this.hasEvalModel){let[a,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,i),s=await this.handler.runEvalStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let i=await this.getParametersSize(r);if(t.length!==4*i)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Pl,Af=M(()=>{Cf(),Pl=Dl}),Ul={};Zt(Ul,{InferenceSession:()=>Bl,TRACE:()=>Er,TRACE_FUNC_BEGIN:()=>Je,TRACE_FUNC_END:()=>Fe,Tensor:()=>Oe,TrainingSession:()=>Pl,env:()=>ge,registerBackend:()=>Ot});var Ke=M(()=>{yf(),wf(),kf(),pa(),Ef(),If(),Al(),zf(),Tf(),Af()}),ca=M(()=>{}),Wl={};Zt(Wl,{default:()=>Nl});var di,pi,Nl,Of=M(()=>{Dc(),Mt(),Dr(),di="ort-wasm-proxy-worker",pi=globalThis.self?.name===di,pi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ha(r.wasm).then(()=>{Ia(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;za(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Br(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Ta(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ca(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:l}=r;Aa(i,a,n,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Ra([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Oa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Nl=pi?null:e=>new Worker(e??At,{type:"module",name:di})}),Vl={};Zt(Vl,{default:()=>ql});var ci,hi,ql,Rf=M(()=>{hi=(ci=import.meta.url,async function(e={}){function t(){return ie.buffer!=pe.buffer&&Ae(),pe}function r(){return ie.buffer!=pe.buffer&&Ae(),X}function i(){return ie.buffer!=pe.buffer&&Ae(),ne}function a(){return ie.buffer!=pe.buffer&&Ae(),R}function n(){return ie.buffer!=pe.buffer&&Ae(),U}function s(){return ie.buffer!=pe.buffer&&Ae(),ee}function l(){return ie.buffer!=pe.buffer&&Ae(),fe}function d(){return ie.buffer!=pe.buffer&&Ae(),We}var p,h,u=Object.assign({},e),m=new Promise((o,c)=>{p=o,h=c}),g=typeof window=="object",$=typeof importScripts=="function",y=$&&self.name=="em-pthread";u.mountExternalData=(o,c)=>{(u.Fb||(u.Fb=new Map)).set(o,c)},u.unmountExternalData=()=>{delete u.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let v=()=>{let o=(f,w,b)=>(...E)=>{let C=Qe,D=w?.();E=f(...E);let W=w?.();return D!==W&&(f=W,b(D),w=b=null),Qe!=C?new Promise((q,L)=>{Jr={resolve:q,reject:L}}):E},c=f=>async(...w)=>{try{if(u.Eb)throw Error("Session already started");let b=u.Eb={bc:w[0],errors:[]},E=await f(...w);if(u.Eb!==b)throw Error("Session mismatch");u.Mb?.flush();let C=b.errors;if(0<C.length){let D=await Promise.all(C);if(D=D.filter(W=>W),0<D.length)throw Error(D.join(`
`))}return E}finally{u.Eb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,f=>u._OrtCreateSession=f),u._OrtRun=c(o(u._OrtRun,()=>u._OrtRun,f=>u._OrtRun=f)),u._OrtRunWithBinding=c(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,f=>u._OrtRunWithBinding=f)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,f=>u._OrtBindInput=f),v=void 0};u.jsepInit=(o,c)=>{if(v?.(),o==="webgpu"){[u.Mb,u.Tb,u.Xb,u.Nb,u.Wb,u.jb,u.Yb,u.$b,u.Ub,u.Vb,u.Zb]=c;let f=u.Mb;u.jsepRegisterBuffer=(w,b,E,C)=>f.registerBuffer(w,b,E,C),u.jsepGetBuffer=w=>f.getBuffer(w),u.jsepCreateDownloader=(w,b,E)=>f.createDownloader(w,b,E),u.jsepOnReleaseSession=w=>{f.onReleaseSession(w)},u.jsepOnRunStart=w=>f.onRunStart(w)}};var _,S,k=Object.assign({},u),I="./this.program",O=(o,c)=>{throw c},T="";(g||$)&&($?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),ci&&(T=ci),T=T.startsWith("blob:")?"":T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),$&&(S=o=>{var c=new XMLHttpRequest;return c.open("GET",o,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=(o,c,f)=>{var w=new XMLHttpRequest;w.open("GET",o,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?c(w.response):f()},w.onerror=f,w.send(null)});var P,V=console.log.bind(console),N=console.error.bind(console),J=V,Q=N;if(Object.assign(u,k),k=null,y){let o=function(c){try{var f=c.data,w=f.cmd;if(w==="load"){let b=[];self.onmessage=E=>b.push(E),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let E of b)o(E);self.onmessage=o};for(let E of f.handlers)u[E]&&!u[E].proxy||(u[E]=(...C)=>{postMessage({Lb:"callHandler",kc:E,args:C})},E=="print"&&(J=u[E]),E=="printErr"&&(Q=u[E]));ie=f.wasmMemory,Ae(),ae(f.wasmModule)}else if(w==="run"){ii(f.pthread_ptr,0,0,1,0,0),Xr(f.pthread_ptr),Xc(),ja(),se||(qn(),se=!0);try{Qc(f.start_routine,f.arg)}catch(b){if(b!="unwind")throw b}}else w==="cancel"?Tt()&&lr(-1):f.target!=="setimmediate"&&(w==="checkMailbox"?se&&er():w&&(Q(`worker: received unknown command ${w}`),Q(f)))}catch(b){throw Hn(),b}};var ae,se=!1;Q=function(...c){c=c.join(" "),console.error(c)},self.alert=function(...c){postMessage({Lb:"alert",text:c.join(" "),mc:Tt()})},u.instantiateWasm=(c,f)=>new Promise(w=>{ae=b=>{b=new WebAssembly.Instance(b,Wa()),f(b),w()}}),self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=o}u.wasmBinary&&(P=u.wasmBinary);var ie,K,oe,pe,X,ne,R,U,ee,fe,me,Be,We,Re=!1;function Ae(){var o=ie.buffer;u.HEAP8=pe=new Int8Array(o),u.HEAP16=ne=new Int16Array(o),u.HEAPU8=X=new Uint8Array(o),u.HEAPU16=R=new Uint16Array(o),u.HEAP32=U=new Int32Array(o),u.HEAPU32=ee=new Uint32Array(o),u.HEAPF32=fe=new Float32Array(o),u.HEAPF64=We=new Float64Array(o),u.HEAP64=me=new BigInt64Array(o),u.HEAPU64=Be=new BigUint64Array(o)}if(!y){if(!((ie=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw Q("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ae()}var Ie=[],ke=[],rt=[],it=0,yt=null;function Ba(){if(--it==0&&yt){var o=yt;yt=null,o()}}function Et(o){throw Q(o="Aborted("+o+")"),Re=!0,oe=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),h(o),o}var Ur,Da=o=>o.startsWith("data:application/octet-stream;base64,"),Ma=o=>o.startsWith("file://");function Pa(o){if(o==Ur&&P)return new Uint8Array(P);if(S)return S(o);throw"both async and sync fetching of the wasm failed"}function Ua(o,c,f){return function(w){if(!P&&(g||$)){if(typeof fetch=="function"&&!Ma(w))return fetch(w,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw`failed to load wasm binary file at '${w}'`;return b.arrayBuffer()}).catch(()=>Pa(w));if(_)return new Promise((b,E)=>{_(w,C=>b(new Uint8Array(C)),E)})}return Promise.resolve().then(()=>Pa(w))}(o).then(w=>WebAssembly.instantiate(w,c)).then(f,w=>{Q(`failed to asynchronously prepare wasm: ${w}`),Et(w)})}function Wa(){return{a:{M:Yc,za:Kc,b:Jc,$:Ka,z:Qa,pa:Za,X:en,Z:tn,qa:rn,na:an,ga:nn,ma:sn,J:on,Y:un,V:ln,oa:dn,W:pn,va:eh,D:th,P:rh,O:ah,C:sh,s:oh,p:uh,E:lh,y:gh,Q:yh,ta:$h,ja:wh,T:_h,aa:bh,F:vh,ia:Xr,sa:xh,u:Sh,B:Ih,o:zh,m:Ch,c:Kr,n:Ah,k:Bh,Aa:Dh,r:Mh,f:Ph,v:Uh,l:Wh,g:Nh,i:Vh,j:qh,h:Hh,e:jh,da:Gh,ea:Fh,fa:Lh,ba:kn,ca:En,S:Kh,d:Yh,N:Xh,G:Qh,K:Zh,w:Jh,ra:ef,U:tf,t:zn,x:rf,L:af,R:nf,ya:sf,xa:of,ka:An,la:On,_:Hr,A:Rn,I:Bn,ha:Dn,H:Mn,a:ie,wa:qr,ua:Wn,q:df}}}var Wr={849620:(o,c,f,w)=>{if(u===void 0||!u.Fb)return 1;if((o=xe(o>>>0)).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if(w>>>=0,(c>>>=0)+(f>>>=0)>o.byteLength)return 3;try{return r().set(o.subarray(c,c+f),w>>>0),0}catch{return 4}},850121:()=>{u.Ub()},850152:()=>{u.Vb()},850181:()=>{u.Zb()},850206:o=>u.Tb(o),850239:o=>u.Xb(o),850271:(o,c,f)=>{u.Nb(o,c,f,!0)},850310:(o,c,f)=>{u.Nb(o,c,f)},850343:()=>typeof wasmOffsetConverter<"u",850400:o=>{u.jb("Abs",o,void 0)},850451:o=>{u.jb("Neg",o,void 0)},850502:o=>{u.jb("Floor",o,void 0)},850555:o=>{u.jb("Ceil",o,void 0)},850607:o=>{u.jb("Reciprocal",o,void 0)},850665:o=>{u.jb("Sqrt",o,void 0)},850717:o=>{u.jb("Exp",o,void 0)},850768:o=>{u.jb("Erf",o,void 0)},850819:o=>{u.jb("Sigmoid",o,void 0)},850874:(o,c,f)=>{u.jb("HardSigmoid",o,{alpha:c,beta:f})},850953:o=>{u.jb("Log",o,void 0)},851004:o=>{u.jb("Sin",o,void 0)},851055:o=>{u.jb("Cos",o,void 0)},851106:o=>{u.jb("Tan",o,void 0)},851157:o=>{u.jb("Asin",o,void 0)},851209:o=>{u.jb("Acos",o,void 0)},851261:o=>{u.jb("Atan",o,void 0)},851313:o=>{u.jb("Sinh",o,void 0)},851365:o=>{u.jb("Cosh",o,void 0)},851417:o=>{u.jb("Asinh",o,void 0)},851470:o=>{u.jb("Acosh",o,void 0)},851523:o=>{u.jb("Atanh",o,void 0)},851576:o=>{u.jb("Tanh",o,void 0)},851628:o=>{u.jb("Not",o,void 0)},851679:(o,c,f)=>{u.jb("Clip",o,{min:c,max:f})},851748:o=>{u.jb("Clip",o,void 0)},851800:(o,c)=>{u.jb("Elu",o,{alpha:c})},851858:o=>{u.jb("Relu",o,void 0)},851910:(o,c)=>{u.jb("LeakyRelu",o,{alpha:c})},851974:(o,c)=>{u.jb("ThresholdedRelu",o,{alpha:c})},852044:(o,c)=>{u.jb("Cast",o,{to:c})},852102:o=>{u.jb("Add",o,void 0)},852153:o=>{u.jb("Sub",o,void 0)},852204:o=>{u.jb("Mul",o,void 0)},852255:o=>{u.jb("Div",o,void 0)},852306:o=>{u.jb("Pow",o,void 0)},852357:o=>{u.jb("Equal",o,void 0)},852410:o=>{u.jb("Greater",o,void 0)},852465:o=>{u.jb("GreaterOrEqual",o,void 0)},852527:o=>{u.jb("Less",o,void 0)},852579:o=>{u.jb("LessOrEqual",o,void 0)},852638:(o,c,f,w,b)=>{u.jb("ReduceMean",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},852797:(o,c,f,w,b)=>{u.jb("ReduceMax",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},852955:(o,c,f,w,b)=>{u.jb("ReduceMin",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853113:(o,c,f,w,b)=>{u.jb("ReduceProd",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853272:(o,c,f,w,b)=>{u.jb("ReduceSum",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853430:(o,c,f,w,b)=>{u.jb("ReduceL1",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853587:(o,c,f,w,b)=>{u.jb("ReduceL2",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853744:(o,c,f,w,b)=>{u.jb("ReduceLogSum",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},853905:(o,c,f,w,b)=>{u.jb("ReduceSumSquare",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},854069:(o,c,f,w,b)=>{u.jb("ReduceLogSumExp",o,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},854233:o=>{u.jb("Where",o,void 0)},854286:(o,c,f)=>{u.jb("Transpose",o,{perm:c?Array.from(n().subarray(c>>>0,f>>>0)):[]})},854394:(o,c,f,w)=>{u.jb("DepthToSpace",o,{blocksize:c,mode:xe(f),format:w?"NHWC":"NCHW"})},854527:(o,c,f,w)=>{u.jb("DepthToSpace",o,{blocksize:c,mode:xe(f),format:w?"NHWC":"NCHW"})},854660:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z)=>{u.jb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:c,dilations:[f],group:w,kernelShape:[b],pads:[E,C],strides:[D],wIsConst:()=>!!t()[q>>>0],outputPadding:L?Array.from(n().subarray(L>>>0,le>>>0)):[],outputShape:de?Array.from(n().subarray(de>>>0,z>>>0)):[],activation:xe(Z)})},855061:(o,c,f,w,b,E,C,D,W,q,L,le,de,z)=>{u.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from(n().subarray(f>>>0,2+(f>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(b>>>0,2+(b>>>0)>>>0)),pads:Array.from(n().subarray(E>>>0,4+(E>>>0)>>>0)),strides:Array.from(n().subarray(C>>>0,2+(C>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:q?Array.from(n().subarray(q>>>0,L>>>0)):[],outputShape:le?Array.from(n().subarray(le>>>0,de>>>0)):[],activation:xe(z)})},855626:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z)=>{u.jb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:c,dilations:[f],group:w,kernelShape:[b],pads:[E,C],strides:[D],wIsConst:()=>!!t()[q>>>0],outputPadding:L?Array.from(n().subarray(L>>>0,le>>>0)):[],outputShape:de?Array.from(n().subarray(de>>>0,z>>>0)):[],activation:xe(Z)})},856027:(o,c,f,w,b,E,C,D,W,q,L,le,de,z)=>{u.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from(n().subarray(f>>>0,2+(f>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(b>>>0,2+(b>>>0)>>>0)),pads:Array.from(n().subarray(E>>>0,4+(E>>>0)>>>0)),strides:Array.from(n().subarray(C>>>0,2+(C>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:q?Array.from(n().subarray(q>>>0,L>>>0)):[],outputShape:le?Array.from(n().subarray(le>>>0,de>>>0)):[],activation:xe(z)})},856592:(o,c)=>{u.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},856683:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z,ce)=>{u.jb("AveragePool",o,{format:ce?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:w,storage_order:b,dilations:[E,C],kernel_shape:[D,W],pads:[q,L,le,de],strides:[z,Z]})},856967:(o,c)=>{u.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},857058:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z,ce)=>{u.jb("AveragePool",o,{format:ce?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:w,storage_order:b,dilations:[E,C],kernel_shape:[D,W],pads:[q,L,le,de],strides:[z,Z]})},857342:(o,c)=>{u.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},857429:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z,ce)=>{u.jb("MaxPool",o,{format:ce?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:w,storage_order:b,dilations:[E,C],kernel_shape:[D,W],pads:[q,L,le,de],strides:[z,Z]})},857709:(o,c)=>{u.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},857796:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z,ce)=>{u.jb("MaxPool",o,{format:ce?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:w,storage_order:b,dilations:[E,C],kernel_shape:[D,W],pads:[q,L,le,de],strides:[z,Z]})},858076:(o,c,f,w,b)=>{u.jb("Gemm",o,{alpha:c,beta:f,transA:w,transB:b})},858180:o=>{u.jb("MatMul",o,void 0)},858234:(o,c,f,w)=>{u.jb("ArgMax",o,{keepDims:!!c,selectLastIndex:!!f,axis:w})},858342:(o,c,f,w)=>{u.jb("ArgMin",o,{keepDims:!!c,selectLastIndex:!!f,axis:w})},858450:(o,c)=>{u.jb("Softmax",o,{axis:c})},858513:(o,c)=>{u.jb("Concat",o,{axis:c})},858573:(o,c,f,w,b)=>{u.jb("Split",o,{axis:c,numOutputs:f,splitSizes:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},858713:o=>{u.jb("Expand",o,void 0)},858767:(o,c)=>{u.jb("Gather",o,{axis:Number(c)})},858838:(o,c)=>{u.jb("GatherElements",o,{axis:Number(c)})},858917:(o,c,f,w,b,E,C,D,W,q,L)=>{u.jb("Resize",o,{antialias:c,axes:f?Array.from(n().subarray(f>>>0,w>>>0)):[],coordinateTransformMode:xe(b),cubicCoeffA:E,excludeOutside:C,extrapolationValue:D,keepAspectRatioPolicy:xe(W),mode:xe(q),nearestMode:xe(L)})},859263:(o,c,f,w,b,E,C)=>{u.jb("Slice",o,{starts:c?Array.from(n().subarray(c>>>0,f>>>0)):[],ends:w?Array.from(n().subarray(w>>>0,b>>>0)):[],axes:E?Array.from(n().subarray(E>>>0,C>>>0)):[]})},859479:o=>{u.jb("Tile",o,void 0)},859531:(o,c,f)=>{u.jb("InstanceNormalization",o,{epsilon:c,format:f?"NHWC":"NCHW"})},859645:(o,c,f)=>{u.jb("InstanceNormalization",o,{epsilon:c,format:f?"NHWC":"NCHW"})},859759:o=>{u.jb("Range",o,void 0)},859812:(o,c)=>{u.jb("Einsum",o,{equation:xe(c)})},859893:(o,c,f,w,b)=>{u.jb("Pad",o,{mode:c,value:f,pads:w?Array.from(n().subarray(w>>>0,b>>>0)):[]})},860020:(o,c,f,w,b,E)=>{u.jb("BatchNormalization",o,{epsilon:c,momentum:f,spatial:!!b,trainingMode:!!w,format:E?"NHWC":"NCHW"})},860189:(o,c,f,w,b,E)=>{u.jb("BatchNormalization",o,{epsilon:c,momentum:f,spatial:!!b,trainingMode:!!w,format:E?"NHWC":"NCHW"})},860358:(o,c,f)=>{u.jb("CumSum",o,{exclusive:Number(c),reverse:Number(f)})},860455:(o,c,f,w,b,E,C,D,W)=>{u.jb("Attention",o,{numHeads:c,isUnidirectional:f,maskFilterValue:w,scale:b,doRotary:E,qkvHiddenSizes:C?Array.from(n().subarray(Number(D)>>>0,Number(D)+C>>>0)):[],pastPresentShareBuffer:!!W})},860727:o=>{u.jb("BiasAdd",o,void 0)},860782:o=>{u.jb("BiasSplitGelu",o,void 0)},860843:o=>{u.jb("FastGelu",o,void 0)},860899:(o,c,f,w,b,E,C,D,W,q,L,le,de,z,Z,ce)=>{u.jb("Conv",o,{format:le?"NHWC":"NCHW",auto_pad:c,dilations:f?Array.from(n().subarray(f>>>0,w>>>0)):[],group:b,kernel_shape:E?Array.from(n().subarray(E>>>0,C>>>0)):[],pads:D?Array.from(n().subarray(D>>>0,W>>>0)):[],strides:q?Array.from(n().subarray(q>>>0,L>>>0)):[],w_is_const:()=>!!t()[de>>>0],activation:xe(z),activation_params:Z?Array.from(l().subarray(Z>>>0,ce>>>0)):[]})},861395:o=>{u.jb("Gelu",o,void 0)},861447:(o,c,f,w)=>{u.jb("GroupQueryAttention",o,{numHeads:c,kvNumHeads:f,scale:w})},861560:(o,c,f,w)=>{u.jb("LayerNormalization",o,{axis:c,epsilon:f,simplified:!!w})},861671:(o,c,f,w)=>{u.jb("LayerNormalization",o,{axis:c,epsilon:f,simplified:!!w})},861782:(o,c,f,w,b,E)=>{u.jb("MatMulNBits",o,{k:c,n:f,accuracyLevel:w,bits:b,blockSize:E})},861909:(o,c,f,w,b,E)=>{u.jb("MultiHeadAttention",o,{numHeads:c,isUnidirectional:f,maskFilterValue:w,scale:b,doRotary:E})},862068:(o,c)=>{u.jb("QuickGelu",o,{alpha:c})},862132:(o,c,f,w,b)=>{u.jb("RotaryEmbedding",o,{interleaved:!!c,numHeads:f,rotaryEmbeddingDim:w,scale:b})},862271:(o,c,f)=>{u.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!f})},862373:o=>{u.Yb(o)},862407:(o,c)=>u.$b(o,c,u.Eb.bc,u.Eb.errors),862519:(o,c,f)=>{u.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!f})}};function Kc(o,c,f){return _n(async()=>{await u.Wb(o,c,f)})}function Yc(){return typeof wasmOffsetConverter<"u"}function Nr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Vr=o=>{o.terminate(),o.onmessage=()=>{}},Na=o=>{at.length==0&&(Fa(),Ga(at[0]));var c=at.pop();if(!c)return 6;wt.push(c),Ye[o.Ab]=c,c.Ab=o.Ab;var f={cmd:"run",start_routine:o.cc,arg:o.Pb,pthread_ptr:o.Ab};return c.postMessage(f,o.ic),0},$t=0,ye=(o,c,...f)=>{for(var w=2*f.length,b=si(),E=ni(8*w),C=E>>>3,D=0;D<f.length;D++){var W=f[D];typeof W=="bigint"?(me[C+2*D]=1n,me[C+2*D+1]=W):(me[C+2*D]=0n,d()[C+2*D+1>>>0]=W)}return o=jn(o,0,w,E,c),dr(b),o};function qr(o){if(y)return ye(0,1,o);if(oe=o,!(0<$t)){for(var c of wt)Vr(c);for(c of at)Vr(c);at=[],wt=[],Ye=[],Re=!0}O(o,new Nr(o))}function Va(o){if(y)return ye(1,0,o);Hr(o)}var Hr=o=>{if(oe=o,y)throw Va(o),"unwind";qr(o)},at=[],wt=[],qa=[],Ye={},Ha=o=>{var c=o.Ab;delete Ye[c],at.push(o),wt.splice(wt.indexOf(o),1),o.Ab=0,ai(c)};function ja(){qa.forEach(o=>o())}var Ga=o=>new Promise(c=>{o.onmessage=b=>{var E=(b=b.data).cmd;if(b.targetThread&&b.targetThread!=Tt()){var C=Ye[b.targetThread];C?C.postMessage(b,b.transferList):Q(`Internal error! Worker sent a message "${E}" to target pthread ${b.targetThread}, but that thread no longer exists!`)}else E==="checkMailbox"?er():E==="spawnThread"?Na(b):E==="cleanupThread"?Ha(Ye[b.thread]):E==="killThread"?(b=b.thread,E=Ye[b],delete Ye[b],Vr(E),ai(b),wt.splice(wt.indexOf(E),1),E.Ab=0):E==="cancelThread"?Ye[b.thread].postMessage({cmd:"cancel"}):E==="loaded"?(o.loaded=!0,c(o)):E==="alert"?alert(`Thread ${b.threadId}: ${b.text}`):b.target==="setimmediate"?o.postMessage(b):E==="callHandler"?u[b.handler](...b.args):E&&Q(`worker sent an unknown command ${E}`)},o.onerror=b=>{throw Q(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var f,w=[];for(f of[])u.hasOwnProperty(f)&&w.push(f);o.postMessage({cmd:"load",handlers:w,wasmMemory:ie,wasmModule:K})});function Fa(){var o=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});at.push(o)}var Jt=o=>{for(;0<o.length;)o.shift()(u)},Xc=()=>{var o=Tt(),c=s()[o+52>>>2>>>0];o=s()[o+56>>>2>>>0],Fn(c,c-o),dr(c)},Qc=(o,c)=>{$t=0,o=Ln(o,c),0<$t?oe=o:lr(o)};class Zc{constructor(c){this.Ib=c-24}}function Jc(o,c,f){var w=new Zc(o>>>=0);throw c>>>=0,f>>>=0,s()[w.Ib+16>>>2>>>0]=0,s()[w.Ib+4>>>2>>>0]=c,s()[w.Ib+8>>>2>>>0]=f,o}function La(o,c,f,w){return y?ye(2,1,o,c,f,w):Ka(o,c,f,w)}function Ka(o,c,f,w){if(o>>>=0,c>>>=0,f>>>=0,w>>>=0,x===void 0)return Q("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var b=[];return y&&b.length===0?La(o,c,f,w):(o={cc:f,Ab:o,Pb:w,ic:b},y?(o.Lb="spawnThread",postMessage(o,b),0):Na(o))}var Ya=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Xa=(o,c,f)=>{var w=(c>>>=0)+f;for(f=c;o[f]&&!(f>=w);)++f;if(16<f-c&&o.buffer&&Ya)return Ya.decode(o.buffer instanceof x?o.slice(c,f):o.subarray(c,f));for(w="";c<f;){var b=o[c++];if(128&b){var E=63&o[c++];if((224&b)==192)w+=String.fromCharCode((31&b)<<6|E);else{var C=63&o[c++];65536>(b=(240&b)==224?(15&b)<<12|E<<6|C:(7&b)<<18|E<<12|C<<6|63&o[c++])?w+=String.fromCharCode(b):(b-=65536,w+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else w+=String.fromCharCode(b)}return w},xe=(o,c)=>(o>>>=0)?Xa(r(),o,c):"";function Qa(o,c,f){return y?ye(3,1,o,c,f):0}function Za(o,c){if(y)return ye(4,1,o,c)}var jr=o=>{for(var c=0,f=0;f<o.length;++f){var w=o.charCodeAt(f);127>=w?c++:2047>=w?c+=2:55296<=w&&57343>=w?(c+=4,++f):c+=3}return c},Ja=(o,c,f,w)=>{if(!(0<w))return 0;var b=f>>>=0;w=f+w-1;for(var E=0;E<o.length;++E){var C=o.charCodeAt(E);if(55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&o.charCodeAt(++E)),127>=C){if(f>=w)break;c[f++>>>0]=C}else{if(2047>=C){if(f+1>=w)break;c[f++>>>0]=192|C>>6}else{if(65535>=C){if(f+2>=w)break;c[f++>>>0]=224|C>>12}else{if(f+3>=w)break;c[f++>>>0]=240|C>>18,c[f++>>>0]=128|C>>12&63}c[f++>>>0]=128|C>>6&63}c[f++>>>0]=128|63&C}}return c[f>>>0]=0,f-b},It=(o,c,f)=>Ja(o,r(),c,f);function en(o,c){if(y)return ye(5,1,o,c)}function tn(o,c,f){if(y)return ye(6,1,o,c,f)}function rn(o,c,f){return y?ye(7,1,o,c,f):0}function an(o,c){if(y)return ye(8,1,o,c)}function nn(o,c,f){if(y)return ye(9,1,o,c,f)}function sn(o,c,f,w){if(y)return ye(10,1,o,c,f,w)}function on(o,c,f,w){if(y)return ye(11,1,o,c,f,w)}function un(o,c,f,w){if(y)return ye(12,1,o,c,f,w)}function ln(o){if(y)return ye(13,1,o)}function dn(o,c){if(y)return ye(14,1,o,c)}function pn(o,c,f){if(y)return ye(15,1,o,c,f)}var cn,nt,eh=()=>{Et("")},Xe=o=>{for(var c="";r()[o>>>0];)c+=cn[r()[o++>>>0]];return c},Gr={},Fr={};function et(o,c,f={}){if(!("argPackAdvance"in c))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(w,b,E={}){var C=b.name;if(!w)throw new nt(`type "${C}" must have a positive integer typeid pointer`);if(Fr.hasOwnProperty(w)){if(E.Rb)return;throw new nt(`Cannot register type '${C}' twice`)}Fr[w]=b,Gr.hasOwnProperty(w)&&(b=Gr[w],delete Gr[w],b.forEach(D=>D()))}(o,c,f)}var hn=(o,c,f)=>{switch(c){case 1:return f?w=>t()[w>>>0]:w=>r()[w>>>0];case 2:return f?w=>i()[w>>>1>>>0]:w=>a()[w>>>1>>>0];case 4:return f?w=>n()[w>>>2>>>0]:w=>s()[w>>>2>>>0];case 8:return f?w=>me[w>>>3]:w=>Be[w>>>3];default:throw new TypeError(`invalid integer width (${c}): ${o}`)}};function th(o,c,f){f>>>=0,et(o>>>=0,{name:c=Xe(c>>>0),fromWireType:w=>w,toWireType:function(w,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(w=typeof b)=="object"||w==="array"||w==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},argPackAdvance:st,readValueFromPointer:hn(c,f,c.indexOf("u")==-1),Db:null})}var st=8;function rh(o,c,f,w){et(o>>>=0,{name:c=Xe(c>>>0),fromWireType:function(b){return!!b},toWireType:function(b,E){return E?f:w},argPackAdvance:st,readValueFromPointer:function(b){return this.fromWireType(r()[b>>>0])},Db:null})}var Lr=[],tt=[];function Kr(o){9<(o>>>=0)&&--tt[o+1]==0&&(tt[o]=void 0,Lr.push(o))}var De=o=>{if(!o)throw new nt("Cannot use deleted val. handle = "+o);return tt[o]},Me=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Lr.pop()||tt.length;return tt[c]=o,tt[c+1]=1,c}};function Yr(o){return this.fromWireType(s()[o>>>2>>>0])}var ih={name:"emscripten::val",fromWireType:o=>{var c=De(o);return Kr(o),c},toWireType:(o,c)=>Me(c),argPackAdvance:st,readValueFromPointer:Yr,Db:null};function ah(o){return et(o>>>0,ih)}var nh=(o,c)=>{switch(c){case 4:return function(f){return this.fromWireType(l()[f>>>2>>>0])};case 8:return function(f){return this.fromWireType(d()[f>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${o}`)}};function sh(o,c,f){f>>>=0,et(o>>>=0,{name:c=Xe(c>>>0),fromWireType:w=>w,toWireType:(w,b)=>b,argPackAdvance:st,readValueFromPointer:nh(c,f),Db:null})}function oh(o,c,f,w,b){if(o>>>=0,f>>>=0,c=Xe(c>>>0),b===-1&&(b=4294967295),b=D=>D,w===0){var E=32-8*f;b=D=>D<<E>>>E}var C=c.includes("unsigned")?function(D,W){return W>>>0}:function(D,W){return W};et(o,{name:c,fromWireType:b,toWireType:C,argPackAdvance:st,readValueFromPointer:hn(c,f,w!==0),Db:null})}function uh(o,c,f){function w(E){var C=s()[E>>>2>>>0];return E=s()[E+4>>>2>>>0],new b(t().buffer,E,C)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];et(o>>>=0,{name:f=Xe(f>>>0),fromWireType:w,argPackAdvance:st,readValueFromPointer:w},{Rb:!0})}function lh(o,c){o>>>=0;var f=(c=Xe(c>>>0))==="std::string";et(o,{name:c,fromWireType:function(w){var b=s()[w>>>2>>>0],E=w+4;if(f)for(var C=E,D=0;D<=b;++D){var W=E+D;if(D==b||r()[W>>>0]==0){if(C=xe(C,W-C),q===void 0)var q=C;else q+="\0",q+=C;C=W+1}}else{for(q=Array(b),D=0;D<b;++D)q[D]=String.fromCharCode(r()[E+D>>>0]);q=q.join("")}return Ze(w),q},toWireType:function(w,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var E=typeof b=="string";if(!(E||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array))throw new nt("Cannot pass non-string to std::string");var C=f&&E?jr(b):b.length,D=ur(4+C+1),W=D+4;if(s()[D>>>2>>>0]=C,f&&E)It(b,W,C+1);else if(E)for(E=0;E<C;++E){var q=b.charCodeAt(E);if(255<q)throw Ze(W),new nt("String has UTF-16 code units that do not fit in 8 bits");r()[W+E>>>0]=q}else for(E=0;E<C;++E)r()[W+E>>>0]=b[E];return w!==null&&w.push(Ze,D),D},argPackAdvance:st,readValueFromPointer:Yr,Db(w){Ze(w)}})}var fn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,dh=(o,c)=>{for(var f=o>>1,w=f+c/2;!(f>=w)&&a()[f>>>0];)++f;if(32<(f<<=1)-o&&fn)return fn.decode(r().slice(o,f));for(f="",w=0;!(w>=c/2);++w){var b=i()[o+2*w>>>1>>>0];if(b==0)break;f+=String.fromCharCode(b)}return f},ph=(o,c,f)=>{if(f??=2147483647,2>f)return 0;var w=c;f=(f-=2)<2*o.length?f/2:o.length;for(var b=0;b<f;++b){var E=o.charCodeAt(b);i()[c>>>1>>>0]=E,c+=2}return i()[c>>>1>>>0]=0,c-w},ch=o=>2*o.length,hh=(o,c)=>{for(var f=0,w="";!(f>=c/4);){var b=n()[o+4*f>>>2>>>0];if(b==0)break;++f,65536<=b?(b-=65536,w+=String.fromCharCode(55296|b>>10,56320|1023&b)):w+=String.fromCharCode(b)}return w},fh=(o,c,f)=>{if(c>>>=0,f??=2147483647,4>f)return 0;var w=c;f=w+f-4;for(var b=0;b<o.length;++b){var E=o.charCodeAt(b);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&o.charCodeAt(++b)),n()[c>>>2>>>0]=E,(c+=4)+4>f)break}return n()[c>>>2>>>0]=0,c-w},mh=o=>{for(var c=0,f=0;f<o.length;++f){var w=o.charCodeAt(f);55296<=w&&57343>=w&&++f,c+=4}return c};function gh(o,c,f){if(o>>>=0,c>>>=0,f=Xe(f>>>=0),c===2)var w=dh,b=ph,E=ch,C=D=>a()[D>>>1>>>0];else c===4&&(w=hh,b=fh,E=mh,C=D=>s()[D>>>2>>>0]);et(o,{name:f,fromWireType:D=>{for(var W,q=s()[D>>>2>>>0],L=D+4,le=0;le<=q;++le){var de=D+4+le*c;le!=q&&C(de)!=0||(L=w(L,de-L),W===void 0?W=L:(W+="\0",W+=L),L=de+c)}return Ze(D),W},toWireType:(D,W)=>{if(typeof W!="string")throw new nt(`Cannot pass non-string to C++ string type ${f}`);var q=E(W),L=ur(4+q+c);return s()[L>>>2>>>0]=q/c,b(W,L+4,q+c),D!==null&&D.push(Ze,L),L},argPackAdvance:st,readValueFromPointer:Yr,Db(D){Ze(D)}})}function yh(o,c){et(o>>>=0,{Sb:!0,name:c=Xe(c>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var $h=()=>1;function wh(o){ii(o>>>0,!$,1,!g,131072,!1),ja()}var mn=o=>{if(!Re)try{if(o(),!(0<$t))try{y?lr(oe):Hr(oe)}catch(c){c instanceof Nr||c=="unwind"||O(1,c)}}catch(c){c instanceof Nr||c=="unwind"||O(1,c)}};function Xr(o){o>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(n(),o>>>2,o).value.then(er),o+=128,Atomics.store(n(),o>>>2,1))}var er=()=>{var o=Tt();o&&(Xr(o),mn(Gn))};function _h(o,c){(o>>>=0)==c>>>0?setTimeout(er):y?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Ye[o])&&o.postMessage({cmd:"checkMailbox"})}var Qr=[];function bh(o,c,f,w,b){for(c>>>=0,w/=2,Qr.length=w,f=b>>>0>>>3,b=0;b<w;b++)Qr[b]=me[f+2*b]?me[f+2*b+1]:d()[f+2*b+1>>>0];return(c?Wr[c]:pf[o])(...Qr)}function vh(o){o>>>=0,y?postMessage({cmd:"cleanupThread",thread:o}):Ha(Ye[o])}function xh(o){}var Zr=(o,c)=>{var f=Fr[o];if(f===void 0)throw o=Vn(o),f=Xe(o),Ze(o),new nt(`${c} has unknown type ${f}`);return f},gn=(o,c,f)=>{var w=[];return o=o.toWireType(w,f),w.length&&(s()[c>>>2>>>0]=Me(w)),o};function Sh(o,c,f){return c>>>=0,f>>>=0,o=De(o>>>0),c=Zr(c,"emval::as"),gn(c,f,o)}var tr=o=>{try{o()}catch(c){Et(c)}},ot=0,Qe=null,yn=0,rr=[],$n={},wn={},kh=0,Jr=null,Eh=[];function _n(o){return function(c){if(!Re){if(ot===0){var f=!1,w=!1;c((b=0)=>{if(!Re&&(yn=b,f=!0,w)){ot=2,tr(()=>Xn(Qe)),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.resume(),b=!1;try{var E=function(){var W=n()[Qe+8>>>2>>>0];return W=F[wn[W]],--$t,W()}()}catch(W){E=W,b=!0}var C=!1;if(!Qe){var D=Jr;D&&(Jr=null,(b?D.reject:D.resolve)(E),C=!0)}if(b&&!C)throw E}}),w=!0,f||(ot=1,Qe=function(){var b=ur(65548),E=b+12;s()[b>>>2>>>0]=E,s()[b+4>>>2>>>0]=E+65536,E=rr[0];var C=$n[E];return C===void 0&&(C=kh++,$n[E]=C,wn[C]=E),E=C,n()[b+8>>>2>>>0]=E,b}(),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.pause(),tr(()=>Kn(Qe)))}else ot===2?(ot=0,tr(Qn),Ze(Qe),Qe=null,Eh.forEach(mn)):Et(`invalid state: ${ot}`);return yn}}(c=>{o().then(c)})}function Ih(o){return o>>>=0,_n(()=>(o=De(o)).then(Me))}var ir=[];function zh(o,c,f,w){return f>>>=0,w>>>=0,(o=ir[o>>>0])(null,c=De(c>>>0),f,w)}var Th={},ar=o=>{var c=Th[o];return c===void 0?Xe(o):c};function Ch(o,c,f,w,b){return f>>>=0,w>>>=0,b>>>=0,(o=ir[o>>>0])(c=De(c>>>0),c[f=ar(f)],w,b)}var bn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Ah(o){return(o>>>=0)==0?Me(bn()):(o=ar(o),Me(bn()[o]))}var Oh=o=>{var c=ir.length;return ir.push(o),c},Rh=(o,c)=>{for(var f=Array(o),w=0;w<o;++w)f[w]=Zr(s()[c+4*w>>>2>>>0],"parameter "+w);return f},vn=(o,c)=>Object.defineProperty(c,"name",{value:o});function Bh(o,c,f){var w=(c=Rh(o,c>>>0)).shift();o--;var b=`return function (obj, func, destructorsRef, args) {
`,E=0,C=[];f===0&&C.push("obj");for(var D=["retType"],W=[w],q=0;q<o;++q)C.push("arg"+q),D.push("argType"+q),W.push(c[q]),b+=`  var arg${q} = argType${q}.readValueFromPointer(args${E?"+"+E:""});
`,E+=c[q].argPackAdvance;return b+=`  var rv = ${f===1?"new func":"func.call"}(${C.join(", ")});
`,w.Sb||(D.push("emval_returnValue"),W.push(gn),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push(b+`};
`),o=function(L){var le=Function;if(!(le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof le} which is not a function`);var de=vn(le.name||"unknownFunctionName",function(){});return de.prototype=le.prototype,de=new de,(L=le.apply(de,L))instanceof Object?L:de}(D)(...W),f=`methodCaller<(${c.map(L=>L.name).join(", ")}) => ${w.name}>`,Oh(vn(f,o))}function Dh(o){return o=ar(o>>>0),Me(u[o])}function Mh(o,c){return c>>>=0,o=De(o>>>0),c=De(c),Me(o[c])}function Ph(o){9<(o>>>=0)&&(tt[o+1]+=1)}function Uh(){return Me([])}function Wh(o){o=De(o>>>0);for(var c=Array(o.length),f=0;f<o.length;f++)c[f]=o[f];return Me(c)}function Nh(o){return Me(ar(o>>>0))}function Vh(){return Me({})}function qh(o){for(var c=De(o>>>=0);c.length;){var f=c.pop();c.pop()(f)}Kr(o)}function Hh(o,c,f){c>>>=0,f>>>=0,o=De(o>>>0),c=De(c),f=De(f),o[c]=f}function jh(o,c){return c>>>=0,o=(o=Zr(o>>>0,"_emval_take_value")).readValueFromPointer(c),Me(o)}function Gh(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),n()[c>>>2>>>0]=o.getUTCSeconds(),n()[c+4>>>2>>>0]=o.getUTCMinutes(),n()[c+8>>>2>>>0]=o.getUTCHours(),n()[c+12>>>2>>>0]=o.getUTCDate(),n()[c+16>>>2>>>0]=o.getUTCMonth(),n()[c+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[c+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[c+28>>>2>>>0]=o}var zt=o=>o%4==0&&(o%100!=0||o%400==0),xn=[0,31,60,91,121,152,182,213,244,274,305,335],Sn=[0,31,59,90,120,151,181,212,243,273,304,334];function Fh(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),n()[c>>>2>>>0]=o.getSeconds(),n()[c+4>>>2>>>0]=o.getMinutes(),n()[c+8>>>2>>>0]=o.getHours(),n()[c+12>>>2>>>0]=o.getDate(),n()[c+16>>>2>>>0]=o.getMonth(),n()[c+20>>>2>>>0]=o.getFullYear()-1900,n()[c+24>>>2>>>0]=o.getDay();var f=(zt(o.getFullYear())?xn:Sn)[o.getMonth()]+o.getDate()-1|0;n()[c+28>>>2>>>0]=f,n()[c+36>>>2>>>0]=-60*o.getTimezoneOffset(),f=new Date(o.getFullYear(),6,1).getTimezoneOffset();var w=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(f!=w&&o.getTimezoneOffset()==Math.min(w,f)),n()[c+32>>>2>>>0]=o}function Lh(o){o>>>=0;var c=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),f=n()[o+32>>>2>>>0],w=c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(E,b);return 0>f?n()[o+32>>>2>>>0]=+(b!=E&&C==w):0<f!=(C==w)&&(b=Math.max(E,b),c.setTime(c.getTime()+6e4*((0<f?C:b)-w))),n()[o+24>>>2>>>0]=c.getDay(),f=(zt(c.getFullYear())?xn:Sn)[c.getMonth()]+c.getDate()-1|0,n()[o+28>>>2>>>0]=f,n()[o>>>2>>>0]=c.getSeconds(),n()[o+4>>>2>>>0]=c.getMinutes(),n()[o+8>>>2>>>0]=c.getHours(),n()[o+12>>>2>>>0]=c.getDate(),n()[o+16>>>2>>>0]=c.getMonth(),n()[o+20>>>2>>>0]=c.getYear(),o=c.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function kn(o,c,f,w,b,E,C){return y?ye(16,1,o,c,f,w,b,E,C):-52}function En(o,c,f,w,b,E){if(y)return ye(17,1,o,c,f,w,b,E)}function Kh(o,c,f,w){o>>>=0,c>>>=0,f>>>=0,w>>>=0;var b=new Date().getFullYear(),E=new Date(b,0,1),C=new Date(b,6,1);b=E.getTimezoneOffset();var D=C.getTimezoneOffset(),W=Math.max(b,D);s()[o>>>2>>>0]=60*W,n()[c>>>2>>>0]=+(b!=D),E=(o=q=>q.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(E),C=o(C),D<b?(It(E,f,17),It(C,w,17)):(It(E,w,17),It(C,f,17))}var ei=[],In=(o,c)=>{ei.length=0;for(var f;f=r()[o++>>>0];){var w=f!=105;c+=(w&=f!=112)&&c%8?4:0,ei.push(f==112?s()[c>>>2>>>0]:f==106?me[c>>>3]:f==105?n()[c>>>2>>>0]:d()[c>>>3>>>0]),c+=w?8:4}return ei};function Yh(o,c,f){return o>>>=0,c=In(c>>>0,f>>>0),Wr[o](...c)}function Xh(o,c,f){return o>>>=0,c=In(c>>>0,f>>>0),Wr[o](...c)}var Qh=()=>{},Zh=()=>Date.now();function Jh(o,c){return Q(xe(o>>>0,c>>>0))}var zn,ef=()=>{throw $t+=1,"unwind"};function tf(){return 4294901760}zn=()=>performance.timeOrigin+performance.now();var rf=()=>navigator.hardwareConcurrency;function af(){return Et("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function nf(o){o>>>=0;var c=r().length;if(o<=c||4294901760<o)return!1;for(var f=1;4>=f;f*=2){var w=c*(1+.2/f);w=Math.min(w,o+100663296);var b=Math;w=Math.max(o,w);e:{b=(b.min.call(b,4294901760,w+(65536-w%65536)%65536)-ie.buffer.byteLength+65535)/65536;try{ie.grow(b),Ae();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}var nr=()=>(Et("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Pt={},Tn=o=>{o.forEach(c=>{nr()})};function sf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Tn(o),Pt.Ob=nr(),Pt.ac=o,Pt.Ob}function of(o,c,f){if(o>>>=0,c>>>=0,Pt.Ob==o)var w=Pt.ac;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Tn(w);for(var b=3;w[b]&&nr()!=o;)++b;for(o=0;o<f&&w[o+b];++o)n()[c+4*o>>>2>>>0]=nr();return o}var ti,ri={},Cn=()=>{if(!ti){var o,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:I};for(o in ri)ri[o]===void 0?delete c[o]:c[o]=ri[o];var f=[];for(o in c)f.push(`${o}=${c[o]}`);ti=f}return ti};function An(o,c){if(y)return ye(18,1,o,c);o>>>=0,c>>>=0;var f=0;return Cn().forEach((w,b)=>{var E=c+f;for(b=s()[o+4*b>>>2>>>0]=E,E=0;E<w.length;++E)t()[b++>>>0]=w.charCodeAt(E);t()[b>>>0]=0,f+=w.length+1}),0}function On(o,c){if(y)return ye(19,1,o,c);o>>>=0,c>>>=0;var f=Cn();s()[o>>>2>>>0]=f.length;var w=0;return f.forEach(b=>w+=b.length+1),s()[c>>>2>>>0]=w,0}function Rn(o){return y?ye(20,1,o):52}function Bn(o,c,f,w){return y?ye(21,1,o,c,f,w):52}function Dn(o,c,f,w){return y?ye(22,1,o,c,f,w):70}var uf=[null,[],[]];function Mn(o,c,f,w){if(y)return ye(23,1,o,c,f,w);c>>>=0,f>>>=0,w>>>=0;for(var b=0,E=0;E<f;E++){var C=s()[c>>>2>>>0],D=s()[c+4>>>2>>>0];c+=8;for(var W=0;W<D;W++){var q=r()[C+W>>>0],L=uf[o];q===0||q===10?((o===1?J:Q)(Xa(L,0)),L.length=0):L.push(q)}b+=D}return s()[w>>>2>>>0]=b,0}var Pn=[31,29,31,30,31,30,31,31,30,31,30,31],Un=[31,28,31,30,31,30,31,31,30,31,30,31],lf=(o,c)=>{t().set(o,c>>>0)};function Wn(o,c,f,w){function b(z,Z,ce){for(z=typeof z=="number"?z.toString():z||"";z.length<Z;)z=ce[0]+z;return z}function E(z,Z){return b(z,Z,"0")}function C(z,Z){function ce(Jn){return 0>Jn?-1:0<Jn?1:0}var _t;return(_t=ce(z.getFullYear()-Z.getFullYear()))===0&&(_t=ce(z.getMonth()-Z.getMonth()))===0&&(_t=ce(z.getDate()-Z.getDate())),_t}function D(z){switch(z.getDay()){case 0:return new Date(z.getFullYear()-1,11,29);case 1:return z;case 2:return new Date(z.getFullYear(),0,3);case 3:return new Date(z.getFullYear(),0,2);case 4:return new Date(z.getFullYear(),0,1);case 5:return new Date(z.getFullYear()-1,11,31);case 6:return new Date(z.getFullYear()-1,11,30)}}function W(z){var Z=z.Bb;for(z=new Date(new Date(z.Cb+1900,0,1).getTime());0<Z;){var ce=z.getMonth(),_t=(zt(z.getFullYear())?Pn:Un)[ce];if(!(Z>_t-z.getDate())){z.setDate(z.getDate()+Z);break}Z-=_t-z.getDate()+1,z.setDate(1),11>ce?z.setMonth(ce+1):(z.setMonth(0),z.setFullYear(z.getFullYear()+1))}return ce=new Date(z.getFullYear()+1,0,4),Z=D(new Date(z.getFullYear(),0,4)),ce=D(ce),0>=C(Z,z)?0>=C(ce,z)?z.getFullYear()+1:z.getFullYear():z.getFullYear()-1}o>>>=0,c>>>=0,f>>>=0,w>>>=0;var q=s()[w+40>>>2>>>0];for(var L in w={fc:n()[w>>>2>>>0],ec:n()[w+4>>>2>>>0],Gb:n()[w+8>>>2>>>0],Kb:n()[w+12>>>2>>>0],Hb:n()[w+16>>>2>>>0],Cb:n()[w+20>>>2>>>0],ub:n()[w+24>>>2>>>0],Bb:n()[w+28>>>2>>>0],nc:n()[w+32>>>2>>>0],dc:n()[w+36>>>2>>>0],hc:q?xe(q):""},f=xe(f),q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})f=f.replace(new RegExp(L,"g"),q[L]);var le="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),de="January February March April May June July August September October November December".split(" ");for(L in q={"%a":z=>le[z.ub].substring(0,3),"%A":z=>le[z.ub],"%b":z=>de[z.Hb].substring(0,3),"%B":z=>de[z.Hb],"%C":z=>E((z.Cb+1900)/100|0,2),"%d":z=>E(z.Kb,2),"%e":z=>b(z.Kb,2," "),"%g":z=>W(z).toString().substring(2),"%G":W,"%H":z=>E(z.Gb,2),"%I":z=>((z=z.Gb)==0?z=12:12<z&&(z-=12),E(z,2)),"%j":z=>{for(var Z=0,ce=0;ce<=z.Hb-1;Z+=(zt(z.Cb+1900)?Pn:Un)[ce++]);return E(z.Kb+Z,3)},"%m":z=>E(z.Hb+1,2),"%M":z=>E(z.ec,2),"%n":()=>`
`,"%p":z=>0<=z.Gb&&12>z.Gb?"AM":"PM","%S":z=>E(z.fc,2),"%t":()=>"	","%u":z=>z.ub||7,"%U":z=>E(Math.floor((z.Bb+7-z.ub)/7),2),"%V":z=>{var Z=Math.floor((z.Bb+7-(z.ub+6)%7)/7);if(2>=(z.ub+371-z.Bb-2)%7&&Z++,Z)Z==53&&((ce=(z.ub+371-z.Bb)%7)==4||ce==3&&zt(z.Cb)||(Z=1));else{Z=52;var ce=(z.ub+7-z.Bb-1)%7;(ce==4||ce==5&&zt(z.Cb%400-1))&&Z++}return E(Z,2)},"%w":z=>z.ub,"%W":z=>E(Math.floor((z.Bb+7-(z.ub+6)%7)/7),2),"%y":z=>(z.Cb+1900).toString().substring(2),"%Y":z=>z.Cb+1900,"%z":z=>{var Z=0<=(z=z.dc);return z=Math.abs(z)/60,(Z?"+":"-")+("0000"+(z/60*100+z%60)).slice(-4)},"%Z":z=>z.hc,"%%":()=>"%"},f=f.replace(/%%/g,"\0\0"),q)f.includes(L)&&(f=f.replace(new RegExp(L,"g"),q[L](w)));return L=function(z){var Z=Array(jr(z)+1);return Ja(z,Z,0,Z.length),Z}(f=f.replace(/\0\0/g,"%")),L.length>c?0:(lf(L,o),L.length-1)}function df(o,c,f,w){return Wn(o>>>0,c>>>0,f>>>0,w>>>0)}y||function(){for(var o=u.numThreads-1;o--;)Fa();Ie.unshift(()=>{it++,function(c){y?c():Promise.all(at.map(Ga)).then(c)}(()=>Ba())})}();for(var Nn=Array(256),sr=0;256>sr;++sr)Nn[sr]=String.fromCharCode(sr);cn=Nn,nt=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>tt.length/2-5-Lr.length;var pf=[qr,Va,La,Qa,Za,en,tn,rn,an,nn,sn,on,un,ln,dn,pn,kn,En,An,On,Rn,Bn,Dn,Mn],F=function(){function o(f,w){return F=f.exports,F=function(){var b=F,E={};for(let[C,D]of Object.entries(b))E[C]=typeof D=="function"?(...W)=>{rr.push(C);try{return D(...W)}finally{Re||(rr.pop(),Qe&&ot===1&&rr.length===0&&(ot=0,$t+=1,tr(Yn),typeof Fibers<"u"&&Fibers.oc()))}}:D;return E}(),F=function(){var b=F,E=D=>W=>D(W)>>>0,C=D=>()=>D()>>>0;return(b=Object.assign({},b)).Ca=E(b.Ca),b.fb=C(b.fb),b.gb=E(b.gb),b.emscripten_main_runtime_thread_id=C(b.emscripten_main_runtime_thread_id),b.sb=E(b.sb),b.tb=C(b.tb),b}(),qa.push(F.ib),ke.unshift(F.Ba),K=w,Ba(),F}var c=Wa();if(it++,u.instantiateWasm)try{return u.instantiateWasm(c,o)}catch(f){Q(`Module.instantiateWasm callback failed with error: ${f}`),h(f)}return Ur||=u.locateFile?Da("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",T):T+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-aobBkcnK.wasm",import.meta.url).href,import.meta.url).href,function(f,w){var b=Ur;return P||typeof WebAssembly.instantiateStreaming!="function"||Da(b)||Ma(b)||typeof fetch!="function"?Ua(b,f,w):fetch(b,{credentials:"same-origin"}).then(E=>WebAssembly.instantiateStreaming(E,f).then(w,function(C){return Q(`wasm streaming compile failed: ${C}`),Q("falling back to ArrayBuffer instantiation"),Ua(b,f,w)}))}(c,function(f){o(f.instance,f.module)}).catch(h),{}}(),Vn=o=>(Vn=F.Ca)(o),qn=()=>(qn=F.Da)();u._OrtInit=(o,c)=>(u._OrtInit=F.Ea)(o,c),u._OrtGetLastError=(o,c)=>(u._OrtGetLastError=F.Fa)(o,c),u._OrtCreateSessionOptions=(o,c,f,w,b,E,C,D,W,q)=>(u._OrtCreateSessionOptions=F.Ga)(o,c,f,w,b,E,C,D,W,q),u._OrtAppendExecutionProvider=(o,c)=>(u._OrtAppendExecutionProvider=F.Ha)(o,c),u._OrtAddFreeDimensionOverride=(o,c,f)=>(u._OrtAddFreeDimensionOverride=F.Ia)(o,c,f),u._OrtAddSessionConfigEntry=(o,c,f)=>(u._OrtAddSessionConfigEntry=F.Ja)(o,c,f),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=F.Ka)(o),u._OrtCreateSession=(o,c,f)=>(u._OrtCreateSession=F.La)(o,c,f),u._OrtReleaseSession=o=>(u._OrtReleaseSession=F.Ma)(o),u._OrtGetInputOutputCount=(o,c,f)=>(u._OrtGetInputOutputCount=F.Na)(o,c,f),u._OrtGetInputName=(o,c)=>(u._OrtGetInputName=F.Oa)(o,c),u._OrtGetOutputName=(o,c)=>(u._OrtGetOutputName=F.Pa)(o,c),u._OrtFree=o=>(u._OrtFree=F.Qa)(o),u._OrtCreateTensor=(o,c,f,w,b,E)=>(u._OrtCreateTensor=F.Ra)(o,c,f,w,b,E),u._OrtGetTensorData=(o,c,f,w,b)=>(u._OrtGetTensorData=F.Sa)(o,c,f,w,b),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=F.Ta)(o),u._OrtCreateRunOptions=(o,c,f,w)=>(u._OrtCreateRunOptions=F.Ua)(o,c,f,w),u._OrtAddRunConfigEntry=(o,c,f)=>(u._OrtAddRunConfigEntry=F.Va)(o,c,f),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=F.Wa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=F.Xa)(o),u._OrtBindInput=(o,c,f)=>(u._OrtBindInput=F.Ya)(o,c,f),u._OrtBindOutput=(o,c,f,w)=>(u._OrtBindOutput=F.Za)(o,c,f,w),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=F._a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=F.$a)(o),u._OrtRunWithBinding=(o,c,f,w,b)=>(u._OrtRunWithBinding=F.ab)(o,c,f,w,b),u._OrtRun=(o,c,f,w,b,E,C,D)=>(u._OrtRun=F.bb)(o,c,f,w,b,E,C,D),u._OrtEndProfiling=o=>(u._OrtEndProfiling=F.cb)(o),u._JsepOutput=(o,c,f)=>(u._JsepOutput=F.db)(o,c,f),u._JsepGetNodeName=o=>(u._JsepGetNodeName=F.eb)(o);var or,Tt=()=>(Tt=F.fb)(),ur=u._malloc=o=>(ur=u._malloc=F.gb)(o),Ze=u._free=o=>(Ze=u._free=F.hb)(o),ii=(o,c,f,w,b,E)=>(ii=F.kb)(o,c,f,w,b,E),Hn=()=>(Hn=F.lb)(),jn=(o,c,f,w,b)=>(jn=F.mb)(o,c,f,w,b),ai=o=>(ai=F.nb)(o),lr=o=>(lr=F.ob)(o),Gn=()=>(Gn=F.pb)(),Fn=(o,c)=>(Fn=F.qb)(o,c),dr=o=>(dr=F.rb)(o),ni=o=>(ni=F.sb)(o),si=()=>(si=F.tb)(),Ln=u.dynCall_ii=(o,c)=>(Ln=u.dynCall_ii=F.vb)(o,c),Kn=o=>(Kn=F.wb)(o),Yn=()=>(Yn=F.xb)(),Xn=o=>(Xn=F.yb)(o),Qn=()=>(Qn=F.zb)();function Zn(){0<it||(y?(p(u),y||Jt(ke),startWorker(u)):(Jt(Ie),0<it||or||(or=!0,u.calledRun=!0,Re||(y||Jt(ke),p(u),y||Jt(rt)))))}return u.___start_em_js=862621,u.___stop_em_js=862843,u.stackSave=()=>si(),u.stackRestore=o=>dr(o),u.stackAlloc=o=>ni(o),u.UTF8ToString=xe,u.stringToUTF8=It,u.lengthBytesUTF8=jr,yt=function o(){or||Zn(),or||(yt=o)},Zn(),m}),ql=hi,globalThis.self?.name==="em-pthread"&&hi()}),At,rs,is,as,fi,Hl,ns,jl,Dr=M(()=>{ca(),At=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),rs=typeof location>"u"?void 0:location.origin,is=(e,t)=>{try{let r=t??At;return(r?new URL(e,r):new URL(e)).origin===rs}catch{return!1}},as=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},fi=(Of(),kr(Wl)).default,Hl=async()=>{if(!At)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(is(At))return[void 0,fi()];let e=await as(At);return[e,fi(e)]},ns=(Rf(),kr(Vl)).default,jl=async(e,t,r)=>[void 0,ns]}),mi,cr,Wt,gi,ss,os,ha,Se,Mt=M(()=>{Dr(),cr=!1,Wt=!1,gi=!1,ss=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},os=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ha=async e=>{if(cr)return Promise.resolve();if(Wt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(gi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Wt=!0;let t=e.initTimeout,r=e.numThreads;if(!os())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=ss();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,l=s?.href??s,d=a?.wasm,p=d?.href??d,h=e.wasmBinary,[u,m]=await jl(l,n,r>1),g=!1,$=[];if(t>0&&$.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),$.push(new Promise((y,x)=>{let v={numThreads:r};h?v.wasmBinary=h:(p||n)&&(v.locateFile=(_,S)=>p??(n??S)+_),m(v).then(_=>{Wt=!1,cr=!0,mi=_,y(),u&&URL.revokeObjectURL(u)},_=>{Wt=!1,gi=!0,x(_)})})),await Promise.race($),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(cr&&mi)return mi;throw new Error("WebAssembly is not initialized yet.")}}),Ee,Ir,$e,fa=M(()=>{Mt(),Ee=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Ir=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Ir(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},$e=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);t._OrtGetLastError(i,i+4);let a=t.HEAP32[i/4],n=t.HEAPU32[i/4+1],s=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(r)}}}),Gl,Bf=M(()=>{Mt(),fa(),Gl=e=>{let t=Se(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ee(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&$e("Can't create run options."),e?.extra!==void 0&&Ir(e.extra,"",new WeakSet,(s,l)=>{let d=Ee(s,i),p=Ee(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&$e(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),us,ls,ds,ps,Fl,Df=M(()=>{Mt(),fa(),us=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ls=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ds=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ps=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let s=i?.deviceType;if(s){let l=Ee("deviceType",r),d=Ee(s,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let s=i;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ee("preferredLayout",r),d=Ee(s.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let n=Ee(a,r);Se()._OrtAppendExecutionProvider(e,n)!==0&&$e(`Can't append execution provider: ${a}.`)}},Fl=e=>{let t=Se(),r=0,i=[],a=e||{};ds(a);try{let n=us(a.graphOptimizationLevel??"all"),s=ls(a.executionMode??"sequential"),l=typeof a.logId=="string"?Ee(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let h=typeof a.optimizedModelFilePath=="string"?Ee(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,d,p,h),r===0&&$e("Can't create session options."),a.executionProviders&&ps(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let u=Ee("enableGraphCapture",i),m=Ee(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,u,m)!==0&&$e(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[u,m]of Object.entries(a.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=Ee(u,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&$e(`Can't set a free dimension override: ${u} - ${m}.`)}return a.extra!==void 0&&Ir(a.extra,"",new WeakSet,(u,m)=>{let g=Ee(u,i),$=Ee(m,i);t._OrtAddSessionConfigEntry(r,g,$)!==0&&$e(`Can't set a session config entry: ${u} - ${m}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r),i.forEach(s=>t._free(s)),n}}}),Ki,St,zr,ma,Tr,ga,Yi,Y=M(()=>{Ki=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},St=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},zr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},ma=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ga=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;default:throw new Error(`unsupported data location: ${e}`)}}}),ya,Ll=M(()=>{ca(),ya=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await a.read();if(l)break;let p=d.byteLength;new Uint8Array(n,s,p).set(d),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),cs,hs,fs,ms,Kl,gs,we,mt=M(()=>{Y(),cs=["V","I","W","E","F"],hs=(e,t)=>{console.log(`[${cs[e]},${new Date().toISOString()}]${t}`)},Kl=(e,t)=>{fs=e,ms=t},gs=(e,t)=>{let r=Tr(e),i=Tr(fs);r>=i&&hs(r,typeof t=="function"?t():t)},we=(...e)=>{ms&&gs(...e)}}),Yl,Mf=M(()=>{Y(),Yl=(e,t)=>new(ma(t))(e)}),$a=M(()=>{}),yi,hr,fr,ys,$s,$i,Xi,ws,Xl,Pf=M(()=>{mt(),$a(),yi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),hr=[],fr=e=>Math.ceil(e/16)*16,ys=e=>{for(let t=0;t<hr.length;t++){let r=hr[t];if(e<=r)return r}return Math.ceil(e/16)*16},$s=1,$i=()=>$s++,Xi=async(e,t,r,i)=>{let a=fr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let l=n.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{n.destroy()}},ws=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.externalBuffers=new Map,this.capturedPendingBuffers=new Map;for(let[t]of yi)hr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=fr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(s.originalSize!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),l.unmap();let p=this.backend.getCommandEncoder();this.backend.endComputePass(),p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,n),we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(l)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=fr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=this.externalBuffers.get(r),i===void 0)throw new Error("previous buffer is not registered");if(e===r)return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`);this.externalBuffers.delete(r)}else i=$i();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),this.externalBuffers.set(e,i),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){let t=this.externalBuffers.get(e);t!==void 0&&(this.storageCache.delete(t),this.externalBuffers.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ys(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:$i(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:e}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await Xi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=yi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},Xl=(...e)=>new ws(...e)}),_s,he,_e=M(()=>{_s=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new _s(e)}),bs,Bt,A,Cr,Ql,Zl,Jl,te=M(()=>{bs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let l=bs.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[n-2],s[n-1]]=l}for(let l=r?3:1;l<=n;l++){let d=i-l<0?1:e[i-l],p=a-l<0?1:t[a-l];if(d!==p&&d>1&&p>1)return;let h=Math.max(d,p);if(d&&p)s[n-l]=Math.max(d,p);else{if(h>1)return;s[n-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},A=class xr{static size(t){return xr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return xr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return xr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=t[n]}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Cr=class Lt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,l){if(l){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Lt.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],i[d],a[d],n,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,a,n,s,l,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return Lt.computeShapeHelper(t,r,p,i,a,n,s,l,d),p}static computeConvOutputShape(t,r,i,a,n,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Lt.computeShapeHelper(!1,t,d,i,a,n,s,l),d}static computeShapeHelper(t,r,i,a,n,s,l,d,p){if(t)for(let h=0;h<r.length-2;h++)i.push(1);else for(let h=0;h<r.length-2;h++)i.push(Lt.adjustPadAndReturnShape(r[h+2],a[h],n[h],s[h],l,h,h+r.length-2,d,p))}static adjustPadAndReturnShape(t,r,i,a,n,s,l,d,p){let h=p?Math.ceil:Math.floor,u=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[l]=0,Math.floor((t-u)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),n[l]=m-n[s],h((t+m-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return h((t+n[s]+n[l]-u)/r+1)}},Ql=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,l;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Bt.isValidBroadcast(a,[n,l]))throw new Error("gemm: invalid bias shape for broadcast");return[n,l,s]}},Zl=-34028234663852886e22,Jl=34028234663852886e22}),Dt,mr,ve,ze,j,be,Qi,Rt,pt,H,gr,B,G,wa,vs,ed,Xt,re=M(()=>{Y(),te(),Dt=64,mr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ve=(e,t=1)=>{let r=mr(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=mr(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:A.computeStrides(r)})}),t},be=e=>e%4===0?4:e%2===0?2:1,Qi=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Rt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,pt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,H=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,gr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=mr(t,a),h=typeof p=="string"?p:p[1],u=typeof p=="string"?p:p[0],m={indices:d,value:h,storage:u,tensor:t},g=R=>typeof R=="string"?R:`${R}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,v=`${y}${e}_strides`,_="";for(let R=0;R<s-1;R++)_+=`
    let dim${R} = current / ${H(v,R,s)};
    let rest${R} = current % ${H(v,R,s)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;_+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${_}
    return indices;
  }`,k=R=>($.offsetToIndices=!0,s<2?R:`o2i_${e}(${R})`),I=[];if(s>=2)for(let R=s-1;R>=0;R--)I.push(`${H(v,R,s)} * (indices[${R}])`);let O=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${I.join("+")};
  }`,T=R=>($.indicesToOffset=!0,s<2?R:`i2o_${e}(${R})`),P=(...R)=>s===0?"0u":`${m.indices}(${R.map(g).join(",")})`,V=(R,U)=>s<2?`${R}`:`${H(R,U,s)}`,N=(R,U,ee)=>s<2?`${R}=${ee};`:`${H(R,U,s)}=${ee};`,J={},Q=(R,U)=>{$.broadcastedIndicesToOffset=!0;let ee=`${U.name}broadcastedIndicesTo${e}Offset`;if(ee in J)return`${ee}(${R})`;let fe=[];for(let me=s-1;me>=0;me--){let Be=U.indicesGet("outputIndices",me+U.rank-s);fe.push(`${V(v,me)} * (${Be} % ${V(x,me)})`)}return J[ee]=`fn ${ee}(outputIndices: ${U.type.indices}) -> u32 {
             return ${fe.length>0?fe.join("+"):"0u"};
           }`,`${ee}(${R})`},ae=(R,U)=>(()=>{if(m.storage===m.value)return`${e}[${R}]=${U};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${U}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),se=R=>(()=>{if(m.storage===m.value)return`${e}[${R}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${R}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${R}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ie=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${h} {
    return ${se(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn get_${e}(${R}) -> ${h} {
    return get_${e}ByIndices(${P(U)});
  }`})(),oe=(...R)=>{if(R.length!==s)throw new Error(`indices length must be ${s}`);let U=R.map(g).join(",");return s===0?se("0u"):s===1?se(U[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${U})`)},pe=R=>s<2?se(R):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${R})`),X=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${h}) {
    ${ae(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn set_${e}(${R}, value: ${h}) {
    set_${e}ByIndices(${P(U)}, value);
  }`})();return{impl:()=>{let R=[],U=!1;return $.offsetToIndices&&(R.push(S),U=!0),$.indicesToOffset&&(R.push(O),U=!0),$.broadcastedIndicesToOffset&&(Object.values(J).forEach(ee=>R.push(ee)),U=!0),$.set&&(R.push(ne),U=!0),$.setByIndices&&(R.push(X),U=!0),$.get&&(R.push(K),U=!0),$.getByIndices&&(R.push(ie),U=!0),!n&&U&&R.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${A.computeStrides(r).join(",")});`),R.join(`
`)},type:m,offsetToIndices:k,indicesToOffset:T,broadcastedIndicesToOffset:Q,indices:P,indicesGet:V,indicesSet:N,set:(...R)=>{if(R.length!==s+1)throw new Error(`indices length must be ${s}`);let U=R[s];if(typeof U!="string")throw new Error("value must be string");let ee=R.slice(0,s).map(g).join(",");return s===0?ae("0u",U):s===1?ae(ee[0],U):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${ee}, ${U})`)},setByOffset:ae,setByIndices:(R,U)=>s<2?ae(R,U):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${U});`),get:oe,getByOffset:se,getByIndices:pe,usage:i,name:e,strides:v,shape:x,rank:s}},B=(e,t,r,i=1)=>gr(e,t,r,"input",i),G=(e,t,r,i=1)=>gr(e,t,r,"output",i),wa=(e,t,r,i=1)=>gr(e,t,r,"internal",i),vs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let local_idx = local_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},ed=(e,t)=>new vs(e,t),Xt=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;a++){let n=r-1-a,s=e[n]||1;(t[t.length-1-a]||1)>1&&s===1&&i.unshift(n)}return i}}),xs,wi,Ss,ks,Es,Le,td,rd,kt=M(()=>{Y(),te(),_e(),re(),xs=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},wi=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,Ss=(e,t)=>A.sortBasedOnPerm(e,wi(e.length,t)),ks=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Es=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Le=(e,t)=>{let r=e.dataType,i=e.dims.length,a=wi(i,t),n=Ss(e.dims,a),{newShape:s,newPerm:l}=Es(e.dims,a),d=A.areEqual(l,[2,3,1]),p=A.areEqual(l,[3,1,2]),h=s.length===2&&l[0]>l[1]||d||p,u=h?s:e.dims,m=n;h&&(u=d?[s[0],s[1]*s[2]]:p?[s[0]*s[1],s[2]]:s,m=[u[1],u[0]]);let g=B("a",r,u.length),$=G("output",r,m.length),y=16,x;return h?x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(g,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${v.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${g.getByIndices(`${g.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(g,$)}

  ${ks(a,i,g,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`,{name:h?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=A.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:h?{x:Math.ceil(m[1]/y),y:Math.ceil(m[0]/y)}:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...j(u,m)]}},getShaderSource:x}},td=(e,t)=>{xs(e.inputs),e.compute(Le(e.inputs[0],t.perm))},rd=e=>he({perm:e.perm})}),Is,zs,Ts,Cs,As,Os,Rs,Bs,Ds,Ms,Ne,id,ad,nd,sd,od,ud,ld,dd,pd,cd,Uf=M(()=>{Y(),te(),re(),_a(),kt(),Is={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},zs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ts={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Cs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},As=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Os=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Rs=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Bs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ds=(e,t)=>{let r=[];if(!Bs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ms=(e,t,r,i,a,n,s)=>{let l=r[0].dims,d=A.size(n),p=A.size(s),h=B("_A",r[0].dataType,l),u=G("output",a,n),m=32,g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `;return{name:e,shaderCache:t,getShaderSource:$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(h,u)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ts[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Is[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${zs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${i==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${Cs[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},Ne=(e,t,r,i)=>{let a=e.inputs.length===1?r:Zi(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,$)=>$));let s=A.normalizeAxes(n,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=Ds(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Le(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=As(l.length,d.dims.length));let[h,u]=Os(d.dims,l),m=h;a.keepDims&&(m=Rs(h,s)),e.compute(Ms(t,{hint:a.cacheKey,inputDependencies:["type"]},[d],i,e.inputs[0].dataType,m,u),{inputs:[d]})},id=(e,t)=>{Ne(e,"ReduceMeanShared",t,"mean")},ad=(e,t)=>{Ne(e,"ReduceL1Shared",t,"l1")},nd=(e,t)=>{Ne(e,"ReduceL2Shared",t,"l2")},sd=(e,t)=>{Ne(e,"ReduceLogSumExpShared",t,"logSumExp")},od=(e,t)=>{Ne(e,"ReduceMaxShared",t,"max")},ud=(e,t)=>{Ne(e,"ReduceMinShared",t,"min")},ld=(e,t)=>{Ne(e,"ReduceProdShared",t,"prod")},dd=(e,t)=>{Ne(e,"ReduceSumShared",t,"sum")},pd=(e,t)=>{Ne(e,"ReduceSumSquareShared",t,"sumSquare")},cd=(e,t)=>{Ne(e,"ReduceLogSumShared",t,"logSum")}}),Ve,Ps,Ar,Zi,qe,Us,Ws,Ns,Vs,qs,Hs,js,Gs,Fs,Ls,He,hd,fd,md,gd,yd,$d,wd,_d,bd,vd,_a=M(()=>{Y(),te(),_e(),re(),Uf(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ps=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ar=(e,t,r,i,a,n,s=!1,l=!1)=>{let d=[],p=r[0].dims,h=p.length,u=A.normalizeAxes(a,h),m=!l&&u.length===0;p.forEach((y,x)=>{m||u.indexOf(x)>=0?s&&d.push(1):d.push(y)});let g=d.length,$=A.size(d);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],v=B("_A",r[0].dataType,h),_=G("output",n,g),S=i(v,_,u),k=S[2];for(let I=0,O=0;I<h;I++)m||u.indexOf(I)>=0?(s&&O++,k=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${k}
                }`):(x.push(`${v.indicesSet("input_indices",I,_.indicesGet("output_indices",O))};`),O++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,_)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?_.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...j(p,d)]})}},Zi=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},qe=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Zi(a,r);e.compute(Ar(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Ps:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Us=(e,t)=>{Ve(e.inputs),qe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Ws=(e,t)=>{Ve(e.inputs),qe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ns=(e,t)=>{Ve(e.inputs),qe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Vs=(e,t)=>{Ve(e.inputs),qe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},qs=(e,t)=>{Ve(e.inputs),qe(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Hs=(e,t)=>{Ve(e.inputs),qe(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},js=(e,t)=>{Ve(e.inputs),qe(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Gs=(e,t)=>{Ve(e.inputs),qe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Fs=(e,t)=>{Ve(e.inputs),qe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Ls=(e,t)=>{Ve(e.inputs),qe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},hd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hs(e,t):id(e,t)},fd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ws(e,t):ad(e,t)},md=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ns(e,t):nd(e,t)},gd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vs(e,t):sd(e,t)},yd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qs(e,t):od(e,t)},$d=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?js(e,t):ud(e,t)},wd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gs(e,t):ld(e,t)},_d=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fs(e,t):dd(e,t)},bd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ls(e,t):pd(e,t)},vd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Us(e,t):cd(e,t)}}),_i,xd,Sd,Ji,Wf=M(()=>{Y(),_e(),_a(),_i=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},xd=(e,t)=>{_i(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Ar("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Sd=(e,t)=>{_i(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Ar("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ji=e=>he(e)}),Ks,Ys,Xs,Qs,Qt,Zs,kd,ba=M(()=>{Y(),te(),$a(),re(),Ks=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],h=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=a.dims[0]/3,m=u,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let $=p;if(u!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==u+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=$+y,v=-1,_=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:$,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:h,hiddenSize:u,vHiddenSize:g,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ys=(e,t,r)=>{let i=be(r),a=64,n=r/i;n<a&&(a=32);let s=Math.ceil(r/i/a),l=[{type:1,data:1/r},{type:12,data:n},{type:12,data:s}],d=ve(e.dataType,i),p=ze(1,i),h=["type"],u=m=>{let g=G("x",e.dataType,e.dims,i),$=ze(e.dataType),y=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${a}>;
  var<workgroup> thread_sum: array<f32, ${a}>;
  ${m.registerUniforms(y).declareVariables(g)}
  ${m.mainStart([a,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${a}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${p}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${p}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(i){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${a}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${p}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${p}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(i){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${a}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${g.type.value}(${$}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${p}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${a};${d};${i}`,inputDependencies:h},getShaderSource:u,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:l})}},Xs=(e,t,r,i,a,n,s,l)=>{let d=l+n.kvSequenceLength,p=[n.batchSize,n.numHeads,n.sequenceLength,d],h=n.kvNumHeads===void 0&&e>1&&i,u=h?[n.batchSize,n.numHeads,d,n.headSize]:void 0,m=s.scale===0?1/Math.sqrt(n.headSize):s.scale,g=be(n.headSize),$=n.headSize/g,y=12,x={x:Math.ceil(d/y),y:Math.ceil(n.sequenceLength/y),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:n.numHeads},{type:1,data:m},{type:12,data:l},{type:12,data:n.kvSequenceLength}],_=h&&i&&A.size(i.dims)>0,S=["type","type"];_&&S.push("type"),a&&S.push("type");let k=[{dims:p,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:u,dataType:t.dataType,gpuDataType:0});let I=O=>{let T=B("q",t.dataType,t.dims,g),P=B("key",r.dataType,r.dims,g),V=[T,P];if(_){let se=B("past_key",i.dataType,i.dims,g);V.push(se)}a&&V.push(B("attention_bias",a.dataType,a.dims));let N=G("output",t.dataType,p),J=[N];h&&J.push(G("present_key",t.dataType,u,g));let Q=ze(1,g),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${T.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${T.type.storage}, ${y*y}>;
  ${O.registerUniforms(ae).declareVariables(...V,...J)}
  ${O.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${_&&h?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${h?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${_&&h?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${h?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${g};${a!==void 0};${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:v}),getShaderSource:I}},Qs=(e,t,r,i,a,n)=>{let s=n+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=a.kvNumHeads==null&&e>1&&i,h=p?[a.batchSize,a.numHeads,s,a.headSize]:void 0,u=[a.batchSize,a.sequenceLength,d],m=12,g={x:Math.ceil(a.vHeadSize/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},$=[{type:12,data:a.sequenceLength},{type:12,data:s},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:d},{type:12,data:n},{type:12,data:a.kvSequenceLength}],y=p&&i&&A.size(i.dims)>0,x=["type","type"];y&&x.push("type");let v=[{dims:u,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:h,dataType:t.dataType,gpuDataType:0});let _=S=>{let k=B("probs",t.dataType,t.dims),I=B("v",r.dataType,r.dims),O=[k,I];y&&O.push(B("past_value",i.dataType,i.dims));let T=[G("output",t.dataType,u)];p&&T.push(G("present_value",t.dataType,h));let P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${m}u;
  var<workgroup> tileQ: array<${k.type.value}, ${m*m}>;
  var<workgroup> tileK: array<${k.type.value}, ${m*m}>;
  ${S.registerUniforms(P).declareVariables(...O,...T)}
  ${S.mainStart([m,m,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${y&&p?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${p?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&p?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${p?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:v,dispatchGroup:g,programUniforms:$}),getShaderSource:_}},Qt=(e,t,r,i,a,n,s,l,d,p,h)=>{let u=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),m=p.kvNumHeads!==void 0||u>1?p.pastSequenceLength:0,g=m+p.kvSequenceLength,$=d&&A.size(d.dims)>0?d:void 0,y=[t,r];p.kvNumHeads===void 0&&u>1&&s&&A.size(s.dims)>0&&y.push(s),$&&y.push($);let x=e.compute(Xs(u,t,r,s,$,p,h,m),{inputs:y,outputs:p.kvNumHeads===void 0&&u>1?[-1,1]:[-1]})[0];e.compute(Ys(x,p.batchSize*p.numHeads*p.sequenceLength,g),{inputs:[x],outputs:[]});let v=[x,i];p.kvNumHeads===void 0&&u>1&&l&&A.size(l.dims)>0&&v.push(l),e.compute(Qs(u,x,i,l,p,m),{inputs:v,outputs:p.kvNumHeads===void 0&&u>1?[0,2]:[0]})},Zs=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=u=>{let m=G("output_q",d[0].dataType,r),g=G("output_k",d[0].dataType,r),$=G("output_v",d[0].dataType,r),y=B("input",d[0].dataType,d[0].dims),x=B("weight",d[1].dataType,d[1].dims),v=B("bias",d[2].dataType,d[2].dims),_=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${u.registerUniforms(S).declareVariables(y,x,v,m,g,$)}
  ${u.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:h},{inputs:d,outputs:[-1,-1,-1]})},kd=(e,t)=>{let r=Ks(e.inputs,t),[i,a,n]=Zs(e,r);return Qt(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),Js,eo,to,Ed,Nf=M(()=>{Ke(),Y(),te(),_e(),re(),Js=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((l,d)=>{if(l!==i[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},eo=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?be(n[n.length-1]):1,l=a==="NHWC"&&n.length>1?s:1,d=A.size(n)/s,p=i,h=p?n.length:n,u=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,l),g=B("bias",e[2].dataType,e[2].dims,l),$=B("inputMean",e[3].dataType,e[3].dims,l),y=B("inputVar",e[4].dataType,e[4].dims,l),x=G("y",e[0].dataType,h,s),v=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<m.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},_=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(u,m,g,$,y,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...j(n)]:[{type:12,data:d}]})}},to=e=>he(e),Ed=(e,t)=>{let{inputs:r,outputCount:i}=e,a=to({...t,outputCount:i});if(ge.webgpu.validateInputContent&&Js(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(eo(r,a))}}),ro,io,Id,Vf=M(()=>{te(),re(),ro=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},io=e=>{let t=e[0].dims,r=e[0].dims[2],i=A.size(t)/4,a=e[0].dataType,n=B("input",a,t,4),s=B("bias",a,[r],4),l=B("residual",a,t,4),d=G("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},Id=e=>{ro(e.inputs),e.compute(io(e.inputs))}}),ao,ue,zd,Td,Cd,Ad,Od,Rd,Bd,Dd,Md,no,Pd,Ud,Wd,Nd,Kt,Vd,Sr,qd,Hd,jd,Gd,Fd,Ld,Kd,Yd,Xd,Qd,Zd,Jd,ep,tp,rp,ip,bi,ap,ea,ta,np,sp,op,so,oo,up,va=M(()=>{Y(),te(),_e(),re(),ao=(e,t,r,i,a,n,s)=>{let l=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=B("inputData",r,[l],4),h=G("outputData",i,[l],4),u=[{name:"vec_size",type:"u32"}];return s&&u.push(...s),`
      ${e.registerUniforms(u).declareVariables(p,h)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",d)}
  }`},ue=(e,t,r,i,a,n=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(A.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>ao(p,A.size(e.dims),e.dataType,n,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(A.size(p[0].dims)/64/4)},programUniforms:d})}},zd=e=>{e.compute(ue(e.inputs[0],"Abs","abs"))},Td=e=>{e.compute(ue(e.inputs[0],"Acos","acos"))},Cd=e=>{e.compute(ue(e.inputs[0],"Acosh","acosh"))},Ad=e=>{e.compute(ue(e.inputs[0],"Asin","asin"))},Od=e=>{e.compute(ue(e.inputs[0],"Asinh","asinh"))},Rd=e=>{e.compute(ue(e.inputs[0],"Atan","atan"))},Bd=e=>{e.compute(ue(e.inputs[0],"Atanh","atanh"))},Dd=e=>he(e),Md=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ue(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},no=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Pd=(e,t)=>{let r=t||no(e.inputs),i=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ud=e=>{e.compute(ue(e.inputs[0],"Ceil","ceil"))},Wd=e=>{e.compute(ue(e.inputs[0],"Cos","cos"))},Nd=e=>{e.compute(ue(e.inputs[0],"Cosh","cosh"))},Kt=e=>he(e),Vd=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Sr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,qd=e=>{let t=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Sr(t)))},Hd=e=>{e.compute(ue(e.inputs[0],"Exp","exp"))},jd=e=>{e.compute(ue(e.inputs[0],"Floor","floor"))},Gd=e=>{let t=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Sr(t)))},Fd=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Ld=e=>{e.compute(ue(e.inputs[0],"Not",t=>`!${t}`))},Kd=e=>{e.compute(ue(e.inputs[0],"Neg",t=>`-${t}`))},Yd=e=>{e.compute(ue(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Xd=e=>{let t=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Qd=e=>{e.compute(ue(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Zd=e=>he(e),Jd=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ep=e=>{e.compute(ue(e.inputs[0],"Sin","sin"))},tp=e=>{e.compute(ue(e.inputs[0],"Sinh","sinh"))},rp=e=>{e.compute(ue(e.inputs[0],"Sqrt","sqrt"))},ip=e=>{e.compute(ue(e.inputs[0],"Tan","tan"))},bi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ap=e=>{e.compute(ue(e.inputs[0],"Tanh",bi))},ea=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${bi("v")};
}
`,ta=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,np=e=>{let t=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"FastGelu",ta,ea(t),void 0,e.inputs[0].dataType))},sp=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(ue(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},op=e=>{e.compute(ue(e.inputs[0],"Log","log"))},so=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,oo=e=>`quick_gelu_impl(${e})`,up=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"QuickGelu",oo,so(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),uo,lo,lp,qf=M(()=>{te(),re(),va(),uo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},lo=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),a=G("output",e[0].dataType,t,4),n=A.size(t)/4,s=ve(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,a)}

  ${Sr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},lp=e=>{uo(e.inputs),e.compute(lo(e.inputs))}}),po,co,je,dp,pp,cp,hp,fp,mp,gp,yp,$p,wp,Hf=M(()=>{Y(),te(),re(),po=(e,t,r,i,a,n,s,l,d,p,h,u)=>{let m,g;typeof l=="string"?m=g=(_,S)=>`${l}((${_}),(${S}))`:typeof l=="function"?m=g=l:(m=l.scalar,g=l.vector);let $=G("outputData",h,i.length,4),y=B("aData",d,t.length,4),x=B("bData",p,r.length,4),v;if(a)if(n){let _=A.size(t)===1,S=A.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;_||S?v=$.setByOffset("global_idx",g(_?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",g(s||k?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=$.setByOffset("global_idx",g(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(S,k,I="")=>{let O=`aData[indexA${k}][componentA${k}]`,T=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${$.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${y.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${I}(${m(O,T)});
          `};h===9?v=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,$)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},co=(e,t,r,i,a,n,s=r.dataType)=>{let l=!A.areEqual(r.dims,i.dims),d=r.dims,p=A.size(r.dims),h=!1,u=!1,m=[l];if(l){let g=Bt.calcShape(r.dims,i.dims,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g,p=A.size(d);let $=A.size(r.dims)===1,y=A.size(i.dims)===1,x=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,v=i.dims.length>0&&i.dims[i.dims.length-1]%4===0;m.push($),m.push(y),m.push(x),m.push(v);let _=1;for(let S=1;S<d.length;S++){let k=r.dims[r.dims.length-S]??1,I=i.dims[i.dims.length-S]??1;if(k===I)_*=k;else break}_%4===0?(u=!0,h=!0):($||y||x||v)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>po(g,r.dims,i.dims,d,h,l,u,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(A.size(d)/4)},...j(r.dims,i.dims,d)]})}},je=(e,t,r,i,a,n)=>{e.compute(co(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},dp=e=>{je(e,"Add",(t,r)=>`${t}+${r}`)},pp=e=>{je(e,"Div",(t,r)=>`${t}/${r}`)},cp=e=>{je(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},hp=e=>{je(e,"Mul",(t,r)=>`${t}*${r}`)},fp=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;je(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},mp=e=>{je(e,"Sub",(t,r)=>`${t}-${r}`)},gp=e=>{je(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},yp=e=>{je(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},$p=e=>{je(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},wp=e=>{je(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),ho,fo,mo,go,_p,bp,jf=M(()=>{Y(),te(),_e(),re(),ho=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},fo=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,mo=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},go=(e,t,r,i)=>{let a=A.size(r),n=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],h=[{type:12,data:a}];for(let y=0;y<e.length;++y)l+=e[y].dims[t],n[y]=l,p.push(e[y].dims.length),s[y]=B(`input${y}`,i,p[y]),d.push("rank"),h.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)h.push(...j(e[y].dims));h.push(...j(r));let u=G("output",i,r.length),m=u.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),$=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,u)})()}

  ${fo(n.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${mo(s,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}),getShaderSource:$}},_p=(e,t)=>{let r=e.inputs,i=r[0].dims,a=A.normalizeAxis(t.axis,i.length);ho(r,a);let n=i.slice();n[a]=r.reduce((l,d)=>l+(d.dims.length>a?d.dims[a]:0),0);let s=r.filter(l=>A.size(l.dims)>0);e.compute(go(s,a,n,r[0].dataType),{inputs:s})},bp=e=>he({axis:e.axis})}),ct,ht,ft,xa,gt=M(()=>{Y(),te(),ct=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ht=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ft=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},xa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Zl,Jl];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Te,Sa,Mr=M(()=>{Te=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Sa=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ka,vp=M(()=>{ka=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),yo,$o,Or,vi,wo,Rr,_o,Ea,Pr=M(()=>{Y(),te(),re(),gt(),Mr(),yo=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,$o=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Or=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],h=a?d:n,u=a?n:d,m=h/t[0],g=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&h%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${h/m}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${yo(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${$o(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},vi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,wo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Rr=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],h=e[0]*t[0],u=a?p:n,m=a?n:p;if(!(m%t[1]===0&&u%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],$=u/t[0],y=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${vi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${vi(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${wo(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},_o=(e,t,r,i,a,n=!1)=>{let[s,l,d]=a,[p,h,u,m]=i,g=Xt(s,d),$=Xt(l,d),y=ve(i[0].type.tensor),x=()=>{let _=h.rank,S=p.rank,k=`var aIndices: ${h.type.indices};`;for(let I=_-2-1,O=S-1;I>=0;I--,O--)k+=`
aIndices[${I}] = ${S>1?`batchIndices[${O}]`:"batchIndices"};`;return g.forEach(I=>{k+=`
aIndices[${I}] = 0;`}),k+=`
aIndices[${_-2}] = u32(row);
                   aIndices[${_-1}] = u32(colIn);`,k},v=()=>{let _=u.rank,S=p.rank,k=`var bIndices: ${u.type.indices};`;for(let I=_-2-1,O=S-1;I>=0;I--,O--)k+=`
bIndices[${I}] = ${S>1?`batchIndices[${O}]`:"batchIndices"};`;return $.forEach(I=>{k+=`
bIndices[${I}] = 0;`}),k+=`
bIndices[${_-2}] = u32(row);
                   bIndices[${_-1}] = u32(colIn);`,k};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Te(e,y)} {
      var value = ${Te(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${x()}
        value = ${h.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Te(e,y)} {
      var value = ${Te(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${v()}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Te(e,y)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Te(e,y)}(bias[row])`};`:""}
        ${r}
        ${m.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ea=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),u=A.size(h),m=s[s.length-2],g=s[s.length-1],$=l[l.length-1],y=g%4===0&&$%4===0,x=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],_=[Math.ceil($/v[0]/x[0]),Math.ceil(m/v[1]/x[1]),Math.ceil(u/v[2]/x[2])],S=y?4:1,k=[...d,m,g/S],I=k.length,O=[...p,g,$/S],T=O.length,P=[u,m,$/S],V=[{type:6,data:m},{type:6,data:$},{type:6,data:g}];ht(t,V),V.push(...j(h,k,O));let N=["rank","rank"],J=e.length>2;J&&(V.push(...j(e[2].dims)),N.push("rank")),V.push(...j(P));let Q=ae=>{let se=h.length,ie=wa("batchDims",e[0].dataType,se,1),K=ve(e[0].dataType),oe=B("a",e[0].dataType,I,S),pe=B("b",e[1].dataType,T,S),X=G("result",e[0].dataType,P.length,S),ne=[oe,pe];if(J){let me=a?S:1;ne.push(B("bias",e[2].dataType,e[2].dims.length,me))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ft(t,R);let U=ve(X.type.tensor),ee=ct(t,X.type.value,U),fe=_o(S,J,ee,[ie,oe,pe,X],[d,p,h],a);return`
  ${ae.registerUniforms(R).registerInternalVariables(ie).declareVariables(...ne,X)}
  ${fe}
  ${y?Or(x,v,K,ie):Rr(x,v,K,ie)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:V}),getShaderSource:Q}}}),bo,xp,Gf=M(()=>{Y(),mt(),re(),gt(),Mr(),vp(),Pr(),bo=(e,t,r,i,a=!1,n,s=4,l=4,d=4,p="f32")=>{let h=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},u=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Te(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${Te(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${Te(s,p)}(0.0);`,k=`${u(l)}`,I=Te(d,p),O=Te(e?s:l,p),T=Te(e?l:s,p),P=ct(n,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Sa(a)}
      ${P}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xp=(e,t,r,i,a,n,s,l,d)=>{let p=t.format==="NHWC",h=p?e[0].dims[3]:e[0].dims[1],u=r[0],m=p?r[2]:r[3],g=p?r[1]:r[2],$=p?r[3]:r[1],y=p&&(h%4===0||h%3===0)&&$%4===0,x=p?$:m*g,v=p?m*g:$,_=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/_[0]/S[0]),Math.ceil(v/_[1]/S[1]),Math.ceil(u/_[2]/S[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let I=y?p&&h%4!==0?3:4:1,O=_[1]*S[1],T=_[0]*S[0],P=Math.max(_[0]*I,_[1]),V=i%O===0,N=a%T===0,J=n%P===0,Q=y?[I,4,4]:[1,1,1],ae=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ht(t,ae),ae.push(...j(e[0].dims,e[1].dims));let se=["rank","rank"];s&&(ae.push(...j(e[2].dims)),se.push("rank")),ae.push(...j(r));let ie=K=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ft(t,oe);let pe=y?4:1,X=ve(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${X}>`:X}) {
        result[flatIndex] = ${y?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),U=B("w",e[1].dataType,e[1].dims.length,pe),ee=[R,U],fe=G("result",e[0].dataType,r.length,pe);if(s){let me=B("bias",e[2].dataType,e[2].dims.length,pe);ee.push(me),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${X}>`:X} {
          return bias[coords.${p?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${ka("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(oe).declareVariables(...ee,fe)}
        ${ne}
        ${bo(p,V,N,J,s,t,Q[0],Q[1],Q[2],X)}
        ${y?Or(S,_,X,void 0,!p,P):Rr(S,_,X,void 0,!p,P,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${V};${N};${J};${O};${T};${P}`,inputDependencies:se},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:ae}),getShaderSource:ie}}}),vo,xi,Nt,xo,Si,So,Sp,kp,Ff=M(()=>{Y(),mt(),te(),re(),gt(),Mr(),vo=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},xi=e=>typeof e=="number"?[e,e,e]:e,Nt=(e,t)=>t<=1?e:e+(e-1)*(t-1),xo=(e,t,r,i=1)=>{let a=Nt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Si=(e,t,r,i,a)=>{a==null&&(a=xo(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},So=(e,t,r,i,a,n,s,l,d,p)=>{let h,u,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=Si([t,r,i,1],[l,d,p],1,[a,n,s],e);u=$[0],m=$[1],g=$[2]}else if(Array.isArray(e)){if(!e.every((y,x,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=Si([t,r,i,1],[l,d,p],1,[a,n,s],e[0]);u=$[0],m=$[1],g=$[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/a),m=Math.ceil(r/n),g=Math.ceil(i/s);let $=(u-1)*a+l-t,y=(m-1)*n+d-r,x=(g-1)*s+p-i,v=Math.floor($/2),_=$-v,S=Math.floor(y/2),k=y-S,I=Math.floor(x/2),O=x-I;h={top:S,bottom:k,left:I,right:O,front:v,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:u,outHeight:m,outWidth:g}},Sp=(e,t,r,i,a,n=!1,s="channelsLast")=>{let l,d,p,h,u;if(s==="channelsLast")[l,d,p,h,u]=e;else if(s==="channelsFirst")[l,u,d,p,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,$,y]=t,[x,v,_]=xi(r),[S,k,I]=xi(i),O=Nt(g,S),T=Nt($,k),P=Nt(y,I),{padInfo:V,outDepth:N,outHeight:J,outWidth:Q}=So(a,d,p,h,x,v,_,O,T,P),ae=n?m*u:m,se=[0,0,0,0,0];return s==="channelsFirst"?se=[l,ae,N,J,Q]:s==="channelsLast"&&(se=[l,N,J,Q,ae]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:h,inChannels:u,outDepth:N,outHeight:J,outWidth:Q,outChannels:ae,padInfo:V,strideDepth:x,strideHeight:v,strideWidth:_,filterDepth:g,filterHeight:$,filterWidth:y,effectiveFilterDepth:O,effectiveFilterHeight:T,effectiveFilterWidth:P,dilationDepth:S,dilationHeight:k,dilationWidth:I,inShape:e,outShape:se,filterShape:t}},kp=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((x,v)=>v)},p=[Math.ceil(vo(d.x.map(x=>r[x]))/l[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let h=1,u=A.size(r),m=[{type:12,data:u},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];ht(t,m),m.push(...j(e[0].dims,e[1].dims));let g=["rank","rank"],$=e.length===3;$&&(m.push(...j(e[2].dims)),g.push("rank")),m.push(...j(r));let y=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ft(t,v);let _=1,S=ve(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,h),I=B("W",e[1].dataType,e[1].dims.length,_),O=[k,I],T=G("result",e[0].dataType,r.length,_),P="";if($){let J=B("bias",e[2].dataType,e[2].dims.length,_);O.push(J),P+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?H("coords",4,5):H("coords",1,5)}];
        }`}let V=Te(h,S),N=ct(t,V,S);return`
            ${P}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...O,T)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${T.offsetToIndices("global_idx")};
              let batch = ${H("coords",0,k.rank)};
              let d2 = ${s?H("coords",k.rank-1,k.rank):H("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?H("coords",1,k.rank):H("coords",2,k.rank)},
              ${s?H("coords",2,k.rank):H("coords",3,k.rank)},
              ${s?H("coords",3,k.rank):H("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?H("uniforms.x_shape",1,k.rank):H("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?H("uniforms.x_shape",2,k.rank):H("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?H("uniforms.x_shape",3,k.rank):H("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?H("uniforms.x_shape",4,k.rank):H("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${$}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:m}),getShaderSource:y}}}),Ep,Ip,Lf=M(()=>{Y(),te(),re(),gt(),Ep=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],h=p/t.group,u=d&&h>=4?be(p):1,m=A.size(r)/u,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];ht(t,g),g.push(...j(s,[l[0],l[1],l[2],l[3]/u]));let $=a?["rank","rank","rank"]:["rank","rank"];g.push(...j([r[0],r[1],r[2],r[3]/u]));let y=x=>{let v=G("output",e[0].dataType,r.length,u),_=ve(v.type.tensor),S=ct(t,v.type.value,_),k=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,l.length,u),O=[k,I];a&&O.push(B("b",e[2].dataType,e[2].dims,u));let T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ft(t,T);let P=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(T).declareVariables(...O,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${P}
    ${n}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},Ip=(e,t,r,i)=>{let a=e.length>2,n=be(r[3]),s=be(r[2]),l=A.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],h=[r[0],r[1],r[2],r[3]/n],u=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ht(t,u),u.push(...j(d,p,h));let m=(s-1)*t.strides[1]+p[1],g=$=>{let y=G("output",e[0].dataType,h.length,n),x=ve(y.type.tensor),v=ct(t,y.type.value,x),_=B("x",e[0].dataType,d.length,n),S=B("w",e[1].dataType,p.length,n),k=[_,S];a&&k.push(B("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",O=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ft(t,O),`
  ${$.registerUniforms(O).declareVariables(...k,y)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:g}}}),ra,ko,zp,Tp=M(()=>{Y(),te(),Pr(),re(),gt(),ra=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],h=s[s.length-1],u=be(p),m=be(h),g=be(d),$=A.size(r)/u/g,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),v=[A.size(x),d,p],_=[{type:12,data:$},{type:12,data:d},{type:12,data:p},{type:12,data:h}];ht(t,_),_.push(...j(x,s,l)),y&&_.push(...j(e[2].dims)),_.push(...j(v));let S=k=>{let I=wa("batch_dims",e[0].dataType,x.length),O=B("a",e[0].dataType,s.length,m),T=B("b",e[1].dataType,l.length,u),P=G("output",e[0].dataType,v.length,u),V=ve(P.type.tensor),N=ct(t,P.type.value,V),J=[O,T],Q="";if(y){let ne=a?u:1;J.push(B("bias",e[2].dataType,e[2].dims.length,ne)),Q=`${a?`value += bias[col / ${ne}];`:`value += ${P.type.value}(bias[row + i]);`}`}let ae=s.slice(0,-2),se=l.slice(0,-2),ie=Xt(ae,x),K=Xt(se,x),oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ft(t,oe);let pe=(ne,R)=>{let U=ne.rank,ee=ne.name;if(U===2)return`var ${ee}_indices = ${ne.type.indices}(0u, 0u);`;let fe=I.rank,me=`var ${ee}_indices: ${ne.type.indices};`;for(let Be=U-2-1,We=fe-1;Be>=0;Be--,We--)me+=`
${ee}_indices[${Be}] = ${fe>1?`batch_indices[${We}]`:"batch_indices"};`;return R.forEach(Be=>{me+=`
${ee}_indices[${Be}] = 0;`}),me+=`${ee}_indices[${U-2}] = 0u;
                     ${ee}_indices[${U-1}] = 0u;`,me},X=()=>{let ne=`var a_data: ${O.type.value};`;for(let R=0;R<m;R++)ne+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${u}];`;for(let R=0;R<g;R++){ne+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${m}];`;for(let U=0;U<m;U++)ne+=`
            values[${R}] = fma(${T.type.value}(a_data${m===1?"":`[${U}]`}), b_data${U}, values[${R}]);
`}return ne};return`
  ${k.registerUniforms(oe).registerInternalVariables(I).declareVariables(...J,P)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}
    ${pe(O,ie)}
    let a_offset = ${O.indicesToOffset("a_indices")};
    ${pe(T,K)}
    let b_offset = ${T.indicesToOffset("b_indices")};
    var values: array<${P.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${X()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${Q}
      ${N}
      let cur_indices = ${P.type.indices}(batch, row + i, col);
      let offset = ${P.indicesToOffset("cur_indices")};
      ${P.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${m};${g};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:_}),getShaderSource:S}},ko=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},zp=e=>{ko(e.inputs);let t=Bt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&i<8?e.compute(ra(e.inputs,{activation:""},t)):e.compute(Ea(e.inputs,{activation:""},t))}}),Eo,yr,Io,$r,ia,ki,zo,To,aa,Kf=M(()=>{te(),Gf(),Ff(),Pr(),Lf(),gt(),Tp(),kt(),Eo=(e,t,r,i,a,n)=>{let s=e[0],l=e.slice(n?1:2,n?3:4),d=l.length,p=t[0],h=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),u=l.map((m,g)=>m+i[g]+i[g+d]).map((m,g)=>Math.floor((m-h[g]+a[g])/a[g]));return u.splice(0,0,s),u.splice(n?3:1,0,p),u},yr=[2,3,1,0],Io=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},$r=(e,t)=>{let r=e.kernelShape.slice();for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Cr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},ia=e=>{let t=xa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},ki=(e,t,r,i)=>{let a=r.format==="NHWC",n=Eo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let O=[t[0]];if(a){let T=e.kernelCustomData.wT??e.compute(Le(t[1],yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T),O.push(T)}else O.push(t[1]);t.length===3&&O.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ip(O,r,n,i),{inputs:O}):e.compute(Ep(O,r,n,i),{inputs:O});return}let s=t.length===3,l=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],h=t[1].dims[2],u=t[1].dims[3],m=n[a?1:2],g=n[a?2:3],$=n[a?3:1],y=a&&h===l&&u===d&&r.pads[0]===0&&r.pads[1]===0;if(y||h===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let O=n[0],T,P,V,N=[];if(a){let ae=e.kernelCustomData.wT??e.compute(Le(t[1],yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ae),y){let se=l*d*p;T=t[0].reshape([1,O,se]),P=ae.reshape([1,se,$]),V=[1,O,$]}else T=t[0].reshape([O,l*d,p]),P=ae.reshape([1,p,$]),V=[O,m*g,$];N.push(T),N.push(P)}else T=t[0].reshape([O,p,l*d]),P=t[1].reshape([1,$,p]),V=[O,$,m*g],N.push(P),N.push(T);s&&N.push(t[2]);let J=V[2],Q=N[0].dims[N[0].dims.length-1];J<8&&Q<8?e.compute(ra(N,r,n,V,a,i),{inputs:N}):e.compute(Ea(N,r,n,V,a,i),{inputs:N});return}let x=!0,v=e.kernelCustomData.wT??e.compute(Le(t[1],yr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let _=[t[0],v];s&&_.push(t[2]);let S=a?m*g:$,k=a?$:m*g,I=h*u*p;e.compute(xp(_,r,n,S,k,I,s,x,i),{inputs:_})},zo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=$r({...t,pads:a,strides:n,dilations:s,kernelShape:l},i);ki(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},To=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=$r(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Sp(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(kp(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},aa=(e,t)=>{if(Io(e.inputs,t),e.inputs[0].dims.length===3)zo(e,t);else if(e.inputs[0].dims.length===5)To(e,e.inputs,t);else{let r=$r(t,e.inputs);ki(e,e.inputs,r)}}}),Co,Cp,Yf=M(()=>{Y(),mt(),re(),gt(),Mr(),vp(),Pr(),Co=(e,t=!1,r,i,a=4)=>{let n=x=>{switch(x){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${x} is not supported.`)}},s=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,l=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,d=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",p=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",h=e?"row":"col",u=e?"col":"row",m=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${h} / outWidth;
      let outCol = ${h} % outWidth;

      let WRow = ${u} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${u} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${d}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${p}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${u} % inChannels;
      ${s}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${a}];`,g=e?`
      let col = colIn * ${a};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${m}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${a};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${m}
      }
      return ${i}(0.0);`,$=`
      let col = colIn * ${a};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${n(a)}
      }
      return ${i}(0.0);
      `,y=ct(r,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?g:$}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?$:g}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${l}
      ${Sa(t)}
      ${y}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${a}] = value;
    }
  }`},Cp=(e,t,r,i,a,n,s,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],h=r[0],u=d?r[2]:r[3],m=d?r[1]:r[2],g=d?r[3]:r[1],$=d&&p%4===0&&p%3&&g%4===0,y=d?g:u*m,x=d?u*m:g,v=[8,8,1],_=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(y/v[0]/_[0]),Math.ceil(x/v[1]/_[1]),Math.ceil(h/v[2]/_[2])];we("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${S}`);let k=$?4:1,I=Math.max(v[0]*k,v[1]),O=$?4:1,T=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],P=[T[0]+(t.dilations[0]<=1?0:(T[0]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(T[1]-1)*(t.dilations[1]-1))],V=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],N=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:T},{type:6,data:V}];ht(t,N),N.push(...j(e[0].dims,e[1].dims));let J=["rank","rank"];s&&(N.push(...j(e[2].dims)),J.push("rank")),N.push(...j(r));let Q=ae=>{let se=B("x",e[0].dataType,e[0].dims.length,O),ie=B("w",e[1].dataType,e[1].dims.length,1),K=G("result",e[0].dataType,r.length,O),oe=[se,ie],pe="";if(s){let R=B("bias",e[2].dataType,e[2].dims.length,O);oe.push(R),pe+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${R.type.value} {
            return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
          }`}let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:T.length},{name:"pads",type:"i32",length:V.length}];ft(t,X);let ne=ve(e[0].dataType,1);if(ne!=="f16"&&ne!=="f32")throw new Error(`elemType ${ne} is not supported.`);return`
        ${ka("uniforms.result_strides")}
        ${ae.registerUniforms(X).declareVariables(...oe,K)};
        ${pe}
        ${Co(d,s,t,se.type.value,k)}
        ${$?Or(_,v,ne,void 0,!d,I):Rr(_,v,ne,void 0,!d,I,!1,void 0,l)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${_};${v};${$}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:N}),getShaderSource:Q}}}),Ao,na,Xf=M(()=>{Y(),mt(),te(),re(),Ao=(e,t,r,i,a,n=!1,s,l,d=!1)=>{let p=d?1:2,h=d?2:3,u=d?3:1,m=n?2:1,g=`
  fn setOutputAtIndex(flatIndex : u32, value : ${n?`vec4<${s}>`:s}) {
    result[flatIndex] = ${n?`vec4<${s}>`:s}(value);
  }`;i&&(g+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${n?`vec4<${s}>`:s} {
      return bias[coords.${d?"w":"y"}${n?"/ 4":""}];
    }`);let $=n?4:1,y=B("W",t[1].dataType,t[1].dims.length,$),x=B("Dy",t[0].dataType,t[0].dims.length,$),v=[x,y];i&&v.push(B("bias",t[2].dataType,[r[u]].length,$));let _=G("result",t[0].dataType,r.length,$),S=`{
        let batch: u32 = ${a?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${a?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${a?"global_id.y":"workgroup_id.y"} * ${m};
        let d1: u32 = ${a?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${s}>, ${m}>;
        for (var i = 0; i < ${m}; i++) {
          dotProd[i] = vec4<${s}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${s}(dyCorner.x) + ${s}(wR)) / ${s}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${s}(dyCorner.y) + ${s}(wC)) / ${s}(uniforms.strides.y);
            let dyC2 = (${s}(dyCorner.y) + 1.0 + ${s}(wC)) / ${s}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${x.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${s}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${u}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${m}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${s}>(0.0)`};
          ${_.set("batch","r","c + i","d1","value")};
        }
      }`,k=`
          let outputIndices = ${_.offsetToIndices("global_idx")};
          let batch = ${_.indicesGet("outputIndices",0)};
          let d1 = ${_.indicesGet("outputIndices",u)};
          let r = ${_.indicesGet("outputIndices",p)};
          let c = ${_.indicesGet("outputIndices",h)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${s}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${s}(dyRCorner) + ${s}(wR)) / ${s}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[${p}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${s}(dyCCorner) + ${s}(wC)) / ${s}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[${h}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${d?x.get("batch","idyR","idyC","inputChannel"):x.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${y.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${s}(0.0)`};
          ${_.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(l).declareVariables(...v,_)}
  ${g}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${n?S:k}}`},na=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=A.size(a),s=[Math.ceil(n/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${s}`);let l=t.format==="NHWC",d=["rank","rank"],p=[t.strides[0],t.strides[1]],h=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],u=[t.dilations[0],t.dilations[1]],m=[h[0]+(t.dilations[0]<=1?0:(t.kernelShape[l?1:2]-1)*(t.dilations[0]-1)),h[1]+(t.dilations[1]<=1?0:(t.kernelShape[l?2:3]-1)*(t.dilations[1]-1))],g=[m[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),m[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],$=!1,y=t.group,x=e[1].dims,v=x[0]/y,_=x[1],S=[{type:12,data:n},{type:12,data:p},{type:12,data:h},{type:12,data:u},{type:12,data:m},{type:6,data:g},{type:12,data:v},{type:12,data:_},...j(e[0].dims,e[1].dims)];i&&(S.push(...j(e[2].dims)),d.push("rank")),S.push(...j(a));let k=s[1]===1&&s[2]===1,I=O=>{let T=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:p.length},{name:"filter_dims",type:"u32",length:h.length},{name:"dilations",type:"u32",length:h.length},{name:"effective_filter_dims",type:"u32",length:m.length},{name:"pads",type:"i32",length:g.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=ve(e[0].dataType);return`${Ao(O,e,a,i,k,$,P,T,l)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:d},getRunData:()=>({dispatchGroup:{x:s[0],y:s[1],z:s[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:I}}}),Oo,Ro,Bo,Ei,Ap,Do,Mo,Po,Uo,Op,Qf=M(()=>{Yf(),Xf(),gt(),kt(),Oo=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Ro=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Bo=(e,t,r,i,a,n,s,l,d,p)=>{let h=e.length-2,u=p.length===0;if(d.length===0)for(let $=0;$<h;++$)d.push(0);let m=e[0],g=t[l?3:1]*a;for(let $=0,y=e.length-h-(l?1:0);$<h;++$,++y){let x=e[y],v=u?x*s[$]:p[$],_=Oo(x,s[$],n[$],t[y],r[$],v);Ro(_,i,n,$,$+h),u&&p.push(s[$]*(x-1)+d[$]+(t[y]-1)*r[$]+1-n[$]-n[$+h])}p.splice(0,0,m),p.splice(l?3:1,0,g)},Ei=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,m)=>u*m,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;d=new Array(u).fill(1)}let p=e.strides.slice();if(p.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}Bo(l,r,d,e.autoPad,e.group,a,p,i,s,n);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:d,strides:p}),h},Ap=e=>{let t=xa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),h=e.outputPadding,u=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:h,outputShape:u,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Do=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Mo=[2,3,1,0],Po=(e,t,r)=>{let i=Ei(r,t),a=r.format==="NHWC",n=i.outputShape,s=n[a?3:1],l=t[0].dims[a?3:1];if(i.group!==1||s===1&&l===1){e.compute(na(t,i));return}let d=n[a?1:2],p=n[a?2:3],h=t[1].dims[2],u=t[1].dims[3],m=a?d*p:s,g=a?s:d*p,$=h*u*l,y=!0,x=e.kernelCustomData.wT??e.compute(Le(t[1],Mo),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let v=[t[0],x],_=t.length===3;_&&(!a&&t[2].dims.length===1?v.push(t[2].reshape([t[2].dims[0],1,1])):v.push(t[2])),e.compute(Cp(v,i,n,m,g,$,_,y),{inputs:v})},Uo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let d=Ei({...t,pads:l,strides:s,dilations:n,kernelShape:a},i);e.compute(na(i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]]))},Op=(e,t)=>{Do(e.inputs,t),e.inputs[0].dims.length===3?Uo(e,t):Po(e,e.inputs,t)}}),Wo,Rp,Bp,Zf=M(()=>{Y(),te(),_e(),re(),Wo=(e,t,r,i)=>{let a=A.size(t),n=t.length,s=B("input",e,n),l=G("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=A.normalizeAxis(d,n),h=u=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=H("uniforms.input_shape","uniforms.axis",n),$=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...j(t,t)]}),getShaderSource:h}},Rp=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Wo(i,r,a,t),{inputs:[0]})},Bp=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),No,Vo,qo,Dp,Mp,Jf=M(()=>{Y(),te(),_e(),re(),No=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Vo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},qo=(e,t)=>{let r,i,a,n,s,l,d=t.format==="NHWC",p=t.blocksize,h=t.mode==="DCR";d?([r,i,a,n]=e.dims,s=h?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],l=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],l=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(s),m=u.dims.length,g=e.dataType,$=B("a",g,m),y=G("output",g,m),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables($,y)}

  ${Vo(l,m,$,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let _=d?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],S=A.size(_),k=u.dims,I=A.sortBasedOnPerm(k,l);return{outputs:[{dims:_,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...j(k,I)]}},getShaderSource:x}},Dp=(e,t)=>{No(e.inputs),e.compute(qo(e.inputs[0],t))},Mp=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),wr,Vt,Ii,Ho,jo,Go,Fo,zi,Lo,Pp,Up,em=M(()=>{Y(),te(),_e(),re(),wr="[a-zA-Z]|\\.\\.\\.",Vt="("+wr+")+",Ii="^"+Vt+"$",Ho="("+Vt+",)*"+Vt,jo="^"+Ho+"$",Go=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Fo=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(jo)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ii)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Vt)))throw new Error("Invalid RHS");i.match(RegExp(wr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],l=0;if(!e.match(RegExp(Ii))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(wr,"g")),p=new Go(i);return d?.forEach((h,u)=>{if(h==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let $=String.fromCharCode(48+g);p.addSymbol($,u+g),this.addSymbol($,r[l++],i)}}else p.addSymbol(h,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[l++],i)}),p}},zi=e=>e+"_max",Lo=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,h)=>B(`input${h}`,t,p)),n=A.size(i),s=G("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let h=[],u="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",$=[],y=[],x=[],v=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,I)=>{if(r.rhs.symbolToIndices.has(I)){let O=r.rhs.symbolToIndices.get(I)?.[0];O!==void 0&&r.lhs.forEach((T,P)=>{if(k.inputIndices.includes(P)){let V=T.symbolToIndices.get(I);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(N=>{h.push(`${a[P].indicesSet(`input${P}Indices`,N,s.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,T)=>{if(k.inputIndices.includes(T)){let P=O.symbolToIndices.get(I);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(V=>{$.push(`${a[T].indicesSet(`input${T}Indices`,V,`${I}`)}`)}),v.push(`prod *= ${a[T].getByIndices(`input${T}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${zi(I)}; ${I}++) {`),x.push("}")});let S=_?[...h,`let sum = ${a.map((k,I)=>k.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,m,...y,...$,u,...v,g,...x];return`
            ${p.registerUniforms(l.map(k=>({name:`${zi(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));p.push({type:12,data:n});let h=e.map((u,m)=>[...j(u)]).reduce((u,m)=>u.concat(m),p);return h.push(...j(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}},getShaderSource:d}},Pp=(e,t)=>{let r=new Fo(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(Lo(a,e.inputs[0].dataType,r,i))},Up=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Ko,Ti,Yo,Xo,Wp,tm=M(()=>{Y(),te(),re(),Ko=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ti=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},Yo=(e,t)=>e.length>t.length?Ti(e,t):Ti(t,e),Xo=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Yo(t,r),a=e[0].dataType,n=a===9?4:1,s=Math.ceil(A.size(i)/n),l=p=>{let h=B("input",a,t.length,n),u=G("output",a,i.length,n),m;if(a===9){let g=($,y,x="")=>`
          let outputIndices${y} = ${u.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${h.broadcastedIndicesToOffset(`outputIndices${y}`,u)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${x}(${h.getByOffset(`index${y}`)}[component${y}]);
        `;m=`
        let outputOffset = global_idx * ${n};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${u.offsetToIndices("global_idx")};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",u)};
        ${u.setByOffset("global_idx",h.getByOffset("inputOffset"))}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,u)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:s},...j(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d})}},Wp=e=>{Ko(e.inputs),e.compute(Xo(e.inputs),{inputs:[0]})}}),Qo,Np,rm=M(()=>{Y(),te(),re(),va(),Qo=e=>{let t=e[0].dataType,r=A.size(e[0].dims),i=A.size(e[1].dims),a=i%4===0,n=s=>{let l=B("x",t,[1],4),d=B("bias",t,[1],4),p=G("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${d.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(l,d,p)}

    ${ea(ze(t))}

    ${s.mainStart(Dt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",ta("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Dt/4)}})}},Np=e=>{e.inputs.length<2||A.size(e.inputs[1].dims)===0?np(e):e.compute(Qo(e.inputs))}}),Zo,Jo,Vp,qp,im=M(()=>{Y(),te(),_e(),re(),Zo=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Jo=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=A.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let l=r[n],d=e[0].dataType===9?4:1,p=Math.ceil(A.size(s)/d),h=[{type:12,data:p},{type:6,data:l},{type:12,data:n},...j(e[0].dims,e[1].dims,s)],u=m=>{let g=B("data",e[0].dataType,e[0].dims.length,d),$=B("inputIndices",e[1].dataType,e[1].dims.length),y=G("output",e[0].dataType,s.length,d),x=_=>{let S=i.length,k=`var indicesIndices${_}  = ${$.type.indices}(0);`;for(let I=0;I<S;I++)k+=`${S>1?`indicesIndices${_}[${I}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${I}]`:`outputIndices${_}`};`;k+=`
          var idx${_} = ${$.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${g.type.indices};
        `;for(let I=0,O=0;I<a;I++)I===n?(k+=`${a>1?`dataIndices${_}[${I}]`:`dataIndices${_}`} = u32(idx${_});`,O+=S):(k+=`${a>1?`dataIndices${_}[${I}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${O}]`:`outputIndices${_}`};`,O++);return k},v;if(e[0].dataType===9){let _=(S,k,I="")=>`
          let outputIndices${k} = ${y.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${I}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,$,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:u}},Vp=e=>he({axis:e.axis}),qp=(e,t)=>{let r=e.inputs;Zo(r),e.compute(Jo(e.inputs,t))}}),eu,tu,Hp,jp,am=M(()=>{Y(),te(),_e(),re(),eu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=A.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((l,d)=>d===r?Math.ceil(l/i)===n.dims[d]:l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((l,d)=>l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},tu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=A.normalizeAxis(t.gatherAxis,a),s=A.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(n,1,...i);let d=A.size(l),p=e[2].dataType,h=e[0].dataType===22,u=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...j(...e.map((g,$)=>g.dims),l)],m=g=>{let $=B("data",e[0].dataType,e[0].dims.length),y=B("inputIndices",e[1].dataType,e[1].dims.length),x=B("scales",e[2].dataType,e[2].dims.length),v=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=G("output",p,l.length),S=[$,y,x];v&&S.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,_)}
        ${g.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(p)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,$)=>$!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,$)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:m}},Hp=(e,t)=>{let r=e.inputs;eu(r,t),e.compute(tu(e.inputs,t))},jp=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ru,iu,Gp,Fp,nm=M(()=>{Y(),te(),_e(),re(),ru=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},iu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,l=A.normalizeAxis(t.axis,a),d=r[l],p=n.slice(0),h=A.size(p),u=B("input",i,a),m=B("indicesInput",s,n.length),g=G("output",i,p.length),$=[{type:12,data:h},{type:6,data:d},{type:12,data:l}];return $.push(...j(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:$}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,m,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Gp=e=>he({axis:e.axis}),Fp=(e,t)=>{let r=e.inputs;ru(r),e.compute(iu(e.inputs,t))}}),au,nu,Lp,Kp,sm=M(()=>{Y(),te(),re(),au=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},nu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Ql.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[a,n];if(!l)throw new Error("Can't use gemm on the given tensors");let d=A.size(l),p=[{type:12,data:d},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(p.push(...j(e[2].dims)),h.push("rank")),p.push(...j(l));let u=m=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let $=t.alpha===1?"":"value *= uniforms.alpha;",y=B("a",e[0].dataType,e[0].dims),x=B("b",e[1].dataType,e[1].dims),v=y.type.value,_=null,S=[y,x];e.length===3&&(_=B("c",e[2].dataType,e[2].dims.length),S.push(_));let k=G("output",e[0].dataType,l.length);S.push(k);let I=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${m.registerUniforms(I).declareVariables(...S)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${v}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${$}
    ${_!=null?`let cOffset = ${_.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${v}(uniforms.beta) * ${_.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:u}},Lp=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Kp=(e,t)=>{au(e.inputs),e.compute(nu(e.inputs,t))}}),Ce,su,Yp,Ci,ou,Yt,Xp,Qp=M(()=>{Y(),te(),_e(),$a(),ba(),re(),kt(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,su=(e,t)=>{let r=e[0],i=Ce(e,1),a=Ce(e,2),n=Ce(e,3),s=Ce(e,4),l=Ce(e,5),d=Ce(e,6),p=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],u=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=u,$=0,y=0,x=Math.floor(m/t.numHeads);if(d&&p&&A.size(d.dims)&&A.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=d.dims[2],y=d.dims[2]}else if(d&&A.size(d.dims)||p&&A.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&A.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&A.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=$+g,S=0;if(s&&A.size(s.dims)>0){S=8;let T=s.dims;throw T.length===1?T[0]===h?S=1:T[0]===3*h+2&&(S=3):T.length===2&&T[0]===h&&T[1]===_&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,I=m;if(a&&A.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],k=!0}}let O=!1;if(s&&A.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&A.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[2]!==u||l.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:u,pastSequenceLength:$,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:I,headSize:x,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:O,passPastInKv:k,qkvFormat:v}},Yp=e=>he({...e}),Ci=he({perm:[0,2,1,3]}),ou=(e,t,r,i,a,n,s)=>{let l=[i,a,n],d=A.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],h=u=>{let m=G("qkv_with_bias",t.dataType,l),g=B("qkv",t.dataType,l),$=B("bias",r.dataType,l),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(y).declareVariables(g,$,m)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},Yt=(e,t,r,i,a,n,s,l)=>{let d=n;if(s&&A.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=ou(e,n,s,t,i,r*a,l),d=d.reshape([t,i,r,a]),e.compute(Le(d,Ci.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,i,r,a])),e.compute(Le(d,Ci.perm),{inputs:[d],outputs:[-1]})[0]},Xp=(e,t)=>{let r=su(e.inputs,t),i=e.inputs[0],a=Ce(e.inputs,1),n=Ce(e.inputs,2),s=Ce(e.inputs,3),l=Ce(e.inputs,4),d=Ce(e.inputs,5),p=Ce(e.inputs,6),h=Ce(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let u=a&&n&&a.dims.length===4&&n.dims.length===4,m=Yt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(u)return Qt(e,m,a,n,l,void 0,p,h,d,r,t);if(!a||!n)throw new Error("key and value must be provided");let g=Yt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),$=Yt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Qt(e,m,g,$,l,void 0,p,h,d,r,t)}}),Ai,uu,lu,sa,Zp,Jp=M(()=>{Y(),te(),re(),Ai=e=>Array.from(e.getBigInt64Array(),Number),uu=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ai(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},lu=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},sa=(e,t)=>{let r=e[0].dims,i=t??Ai(e[1]),a=lu(r,i),n=A.size(a),s=e[0].dataType,l=B("input",s,r.length),d=G("output",s,a.length),p=h=>`
      const inputShape = ${l.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(l,d)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...j(e[0].dims,a)]}),getShaderSource:p}},Zp=e=>{uu(e.inputs),e.compute(sa(e.inputs),{inputs:[0]})}}),du,Oi,ec,pu,Ri,tc,om=M(()=>{Y(),te(),_e(),ba(),re(),Qp(),Jp(),kt(),du=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],h=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=p,m=0,g=0,$=Math.floor(h/t.numHeads),y=n&&n.dims.length!==0,x=s&&s.dims.length!==0,v=!0;if(y&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[1],g=n.dims[1]}else if(y||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');_=2,u=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,u=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,u=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let S=0,k=!1,I=h;if(a){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(u!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(u!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],k=!0}}let O=m+u;return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:u,totalSequenceLength:O,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:h,vHiddenSize:I,headSize:$,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:S,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:_,isPastkvBSNH:v}},Oi=(e,t,r,i)=>{let a=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],n=4,s=A.size(a)/n,l=i.totalSequenceLength,d=G("present_kv",r,a.length,n),p=B("new_kv",e.dataType,e.dims.length,n),h=t?B("past_kv",t.dataType,t.dims.length,n):void 0,u=Math.ceil(i.headSize/n),m={x:l,y:e.dims[0],z:1},g=t?["rank","rank"]:["rank"],$=[{type:12,data:s},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],y=[p];h?($.push(...j(e.dims),...j(t.dims),...j(a)),y.push(h)):$.push(...j(e.dims),...j(a));let x=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],v=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,_=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,S=t?`if (s < past_seqlen) {
        ${v}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${_}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${_}
        }`,k=I=>`

  ${I.registerUniforms(x).declareVariables(...y,d)}
  ${I.mainStart([u,i.kvNumHeads,1])}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${d.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${u}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${S}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${u}${!!t}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:m,programUniforms:$}),getShaderSource:k}},ec=e=>he({...e}),pu=he({perm:[0,2,1,3]}),Ri=(e,t,r,i,a)=>{let n=t,s=i.kvNumHeads,l=i.nReps;return t.dims.length===3&&i.kvSequenceLength!==0&&(n=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize])),r?n=e.compute(Oi(n,r,n.dataType,i),{inputs:[n,r],outputs:[i.isPastkvBSNH?a:-1]})[0]:n=e.compute(Oi(n,void 0,n.dataType,i),{inputs:[n],outputs:[i.isPastkvBSNH?a:-1]})[0],l!==1&&(n=e.compute(sa([n],[1,1,1,l]),{inputs:[n],outputs:[-1]})[0],n=n.reshape([i.batchSize,i.totalSequenceLength,s*l,i.headSize])),e.compute(Le(n,pu.perm),{inputs:[n],outputs:[-1]})[0]},tc=(e,t)=>{let r=du(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=Yt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,n=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,s=Ri(e,e.inputs[1],a,r,1),l=Ri(e,e.inputs[2],n,r,2);Qt(e,i,s,l,void 0,void 0,void 0,void 0,void 0,r,t)}}),Bi,cu,hu,rc,um=M(()=>{Y(),te(),kt(),re(),Bi=(e,t,r,i,a,n,s,l)=>{let d=be(n),p=d===1?"f32":`vec${d}f`,h=d===1?"vec2f":`mat2x${d}f`,u=a*s,m=[a,s,n/d],g=[a,s,2],$=["rank","type","type"],y=[];y.push(...j(m,g));let x=v=>{let _=B("x",t.dataType,3,d),S=B("scale",r.dataType,r.dims),k=B("bias",i.dataType,i.dims),I=G("output",1,3,2),O=[_,S,k,I],T=64;return`
  var<workgroup> workgroup_shared : array<${h}, ${T}>;
  const workgroup_size = ${T}u;
  ${v.declareVariables(...O)}
  ${v.mainStart(T)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${_.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${pt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${pt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:u},programUniforms:y}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},cu=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],l=i[1],d=A.sizeFromDimension(i,n),p=be(d),h=A.size(a)/p,u=Bi(e,t[0],t[1],t[2],s,d,l,r.epsilon),m=[s,l,d/p],g=[s,l],$=["type","none"],y=x=>{let v=B("x",t[0].dataType,m.length,p),_=B("scale_shift",1,g.length,2),S=G("output",t[0].dataType,m.length,p),k=[v,_,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...j(m,g,m)]}),getShaderSource:y},{inputs:[t[0],u]})},hu=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],l=A.sizeFromDimension(i,1)/s,d=be(s),p=A.size(a)/d,h=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],u=["type","type"],m=[0,i.length-1];for(let x=0;x<i.length-2;x++)m.push(x+1);let g=e.compute(Le(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0],$=Bi(e,g,t[1],t[2],n,l,s,r.epsilon),y=x=>{let v=ve(t[0].dataType),_=d===1?"vec2f":`mat${d}x2f`,S=O=>{let T=O===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${v}(${P}(scale.${T}))`;case 2:return`vec2<${v}>(${P}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${v}>(${P}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${d}`)}},k=B("input",t[0].dataType,t[0].dims,d),I=G("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${_}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:y},{inputs:[t[0],$]})},rc=(e,t)=>{t.format==="NHWC"?hu(e,e.inputs,t):cu(e,e.inputs,t)}}),fu,mu,ic,lm=M(()=>{Y(),te(),re(),fu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},mu=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],l=a,d=A.normalizeAxis(t.axis,a.length),p=A.sizeToDimension(a,d),h=A.sizeFromDimension(a,d),u=A.size(n.dims),m=s?A.size(s.dims):0;if(u!==h||s&&m!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${m}`);let g=[];for(let I=0;I<a.length;++I)I<d?g.push(a[I]):g.push(1);let $=be(h),y=["type","type"],x=[{type:12,data:p},{type:1,data:h},{type:12,data:Math.floor(h/$)},{type:1,data:t.epsilon}];s&&y.push("type");let v=r>1,_=r>2,S=I=>{let O=ve(e[0].dataType),T=[B("x",e[0].dataType,e[0].dims,$),B("scale",n.dataType,n.dims,$)];s&&T.push(B("bias",s.dataType,s.dims,$)),T.push(G("output",e[0].dataType,l,$)),v&&T.push(G("mean_data_output",1,g)),_&&T.push(G("inv_std_output",1,g));let P=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(P).declareVariables(...T)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Qi("f32",$)};
    var mean_square_vector = ${Qi("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Rt(O,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${pt("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${pt("mean_square_vector",$)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Rt(O,$,"x[j + offset]")};
      let f32scale = ${Rt(O,$,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Rt(O,$,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:g,dataType:1}),_&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:S}},ic=(e,t)=>{fu(e.inputs),e.compute(mu(e.inputs,t,e.outputCount))}}),gu,yu,ac,nc,dm=M(()=>{Y(),te(),_e(),re(),gu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!A.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(A.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(A.size(d)!==p)throw new Error("zeroPoints input size error.")}},yu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=A.size(l),p=e[1].dims[2]/4,h=e[0].dataType,u=be(t.k),m=be(p),g=be(s),$=l.concat([a,s]),y=a>1&&s/g%2===0?2:1,x=A.size($)/g/y,v=64,_=[],S=[d,a,n/u],k=A.convertShape(e[1].dims).slice();k.splice(-1,1,p/m),_.push(...j(S)),_.push(...j(k)),_.push(...j(e[2].dims)),e.length===4&&_.push(...j(A.convertShape(e[3].dims)));let I=[d,a,s/g];_.push(...j(I));let O=T=>{let P=S.length,V=B("a",e[0].dataType,P,u),N=B("b",12,k.length,m),J=B("scales",e[2].dataType,e[2].dims.length),Q=[V,N,J],ae=e.length===4?B("zero_points",12,e[3].dims.length):void 0;ae&&Q.push(ae);let se=I.length,ie=G("output",e[0].dataType,se,g),K=ve(e[0].dataType),oe=(()=>{switch(u){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${u}-component is not supported.`)}})(),pe=()=>{let R=`
          // reuse a data
            var input_offset = ${V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${V.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<g*y;U++)R+=`
            b_value = ${m===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(ee,fe)=>`${K}(b_value_lower[${fe}]), ${K}(b_value_upper[${fe}])`).join(", ")});
            b_dequantized_values = ${u===1?`${oe}(${Array.from({length:8},(ee,fe)=>`(b_quantized_values[${fe}] - ${ae?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${ae?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(U/g)}]${g>1?`[${U%g}]`:""} += ${Array.from({length:8/u},(ee,fe)=>`${u===1?`a_data[${fe}] * b_dequantized_values[${fe}]`:`dot(a_data[${fe}], b_dequantized_values[${fe}])`}`).join(" + ")};
          `;return R},X=()=>{let R=`
            var col_index = col * ${g};
            ${ae?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let U=0;U<g*y;U++)R+=`
            let scale${U} = ${J.getByOffset("col_index * nBlocksPerCol + block")};
            ${ae?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return R},ne=()=>{let R=`col_index = col * ${g};`;for(let U=0;U<g*y;U++)R+=`
            let b${U}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return R+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,R};return`
        var<workgroup> workgroup_shared: array<${ie.type.value}, ${y*v}>;
        ${T.declareVariables(...Q,ie)}
        ${T.mainStart([v,1,1])}
          let output_indices = ${ie.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${X()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${ne()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${pe()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${m};${g};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:h}],dispatchGroup:{x},programUniforms:_}),getShaderSource:O}},ac=(e,t)=>{gu(e.inputs,t),e.compute(yu(e.inputs,t))},nc=e=>he(e)}),$u,wu,_u,bu,vu,xu,Su,ku,sc,pm=M(()=>{Y(),te(),re(),$u=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},wu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${H("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${H("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},_u=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${H("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${H("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},bu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${H("uniforms.x_shape",a,t)})) {
                  k = i32(${H("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},vu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${H("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${H("uniforms.x_shape",a,t)})) {
                  k -= i32(${H("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},xu=(e,t,r)=>{switch(r.mode){case 0:return wu(e,t,r.pads.length);case 1:return _u(e,t,r.pads.length);case 2:return bu(e,t,r.pads.length);case 3:return vu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Su=(e,t)=>{let r=A.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=A.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...j(e[0].dims,r));let l=["rank"],d=p=>{let h=G("output",e[0].dataType,r.length),u=B("x",e[0].dataType,i.length),m=u.type.value,g=xu(h,i.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms($).declareVariables(u,h)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(r)/64)},programUniforms:n}),getShaderSource:d}},ku=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)n[Number(l[d])]=Number(r[d]),n[Number(l[d])+a]=Number(r[d+l.length])}else r.forEach((l,d)=>n[Number(d)]=Number(l));let s=[];return n.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},sc=(e,t)=>{$u(e.inputs);let r=ku(e.inputs,t);e.compute(Su(e.inputs,r),{inputs:[0]})}}),qt,Di,Mi,Pi,Ui,Eu,Iu,Wi,Ni,oc,uc,Vi,lc,dc,qi,pc,cc,hc,fc,cm=M(()=>{Ke(),Y(),te(),re(),qt=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Di=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=n?t.dilations.slice():[],p=t.pads.slice();Cr.adjustPoolAttributes(r,a,s,l,d,p);let h=Cr.computePoolOutputShape(r,a,l,d,s,p,t.autoPad,t.ceilMode),u=Object.assign({},t);n?Object.assign(u,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=h.slice();return m.push(m.splice(1,1)[0]),[u,i?m:h]},Mi=(e,t)=>{let r=t.format==="NHWC",i=A.size(e),a=A.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],u=!!(p+h);n.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(y+x),n.push({type:12,data:g},{type:12,data:$},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,u,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=A.computeStrides(t.kernelShape);n.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,h)=>p+h);return[n,s,!!d,!1,!1]}},Pi=(e,t,r,i,a,n,s,l,d,p,h,u)=>{let m=a.format==="NHWC",g=t.type.value,$=G("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",v="",_=r-(m?2:1);if(h?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(m?3:2);u?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${g}(${l});
              var pad = 0;
              ${x}
              ${y}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${H("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${H("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${H("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${H("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ui=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Eu=e=>`${Ui(e)};${e.countIncludePad}`,Iu=e=>`${Ui(e)};${e.storageOrder};${e.dilations}`,Wi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ni=(e,t,r,i)=>{let[a,n]=Di(t,i,r),s=B("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[h,u,m,g,$]=Mi(n,a);h.push(...j(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${$}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(n)/64)},programUniforms:h}),getShaderSource:x=>Pi(x,s,t.dims.length,n.length,a,d,p,0,u,m,g,$)}},oc=e=>{let t=e.count_include_pad!==0,r=Wi(e);r.ceilMode;let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Eu(i)}},uc=(e,t)=>{qt(e.inputs),e.compute(Ni("AveragePool",e.inputs[0],!1,t))},Vi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},lc=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},dc=(e,t)=>{qt(e.inputs),e.compute(Ni("GlobalAveragePool",e.inputs[0],!0,t))},qi=(e,t,r,i)=>{let[a,n]=Di(t,i,r),s=`
      value = max(x_val, value);
    `,l="",d=B("x",t.dataType,t.dims.length),p=["rank"],[h,u,m,g,$]=Mi(n,a);return h.push(...j(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${$}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(n)/64)},programUniforms:h}),getShaderSource:y=>Pi(y,d,t.dims.length,n.length,a,s,l,t.dataType===10?-65504:-1e5,u,m,g,$)}},pc=(e,t)=>{qt(e.inputs),e.compute(qi("MaxPool",e.inputs[0],!1,t))},cc=e=>{let t=e.storage_order,r=e.dilations,i=Wi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");i.ceilMode;let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Iu(a)}},hc=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},fc=(e,t)=>{qt(e.inputs),e.compute(qi("GlobalMaxPool",e.inputs[0],!0,t))}}),zu,Tu,mc,gc,hm=M(()=>{Y(),te(),_e(),re(),zu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Tu=(e,t)=>{let r=A.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,l=A.size(n),d=i===3||i===2,p=d?[Math.ceil(A.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,u=e.length>2?e[2]:void 0,m=u?d?[Math.ceil(A.size(u.dims)/4)]:u.dims:void 0,g=h.length===0||h.length===1&&h[0]===1,$=g===!1&&h.length===1,y=be(l),x=g&&(!d||y===4),v=x?y:1,_=x&&!d?y:1,S=B("input",d?12:i,p.length,_),k=B("scale",s,h.length),I=u?B("zero_point",d?12:i,m.length):void 0,O=G("output",s,n.length,v),T=[S,k];I&&T.push(I);let P=[p,h];u&&P.push(m);let V=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...j(...P,n)],N=J=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${J.registerUniforms(Q).declareVariables(...T,O)}
      ${J.mainStart()}
          ${J.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${O.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:$?`
            let scale_index = ${O.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?g?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:$?d?`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${O.setByOffset("global_idx",`${O.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:V})}},mc=(e,t)=>{zu(e.inputs,t),e.compute(Tu(e.inputs,t))},gc=e=>he({axis:e.axis,blockSize:e.blockSize})}),Cu,Au,yc,fm=M(()=>{Ke(),Y(),re(),Cu=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Au=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...j(n)],d=p=>{let h=G("output",i,n.length),u=h.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${p.registerUniforms(m).declareVariables(h)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},yc=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&Cu(t,r,i),e.compute(Au(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Ou,Ru,Bu,Du,Mu,Pu,Uu,Wu,Nu,Vu,qu,Hi,Hu,ju,Gu,Fu,Lu,$c,wc,mm=M(()=>{Y(),te(),_e(),re(),Ou=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ru=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Bu=(e,t,r,i,a,n)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>n.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length>0){if(e[l].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ou(i,t),t.axes.length>0&&Ru(i,t.axes,p).forEach((h,u)=>i[u]=h)}if(d>0&&e.length>d&&(e[d].getBigInt64Array().forEach(h=>a.push(Number(h))),a.length!==p||r>=18&&a.length===t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Du=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Mu=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Pu=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Uu=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Wu=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Nu=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${H("uniforms.scales","i",i)};
        var roi_low = ${H("uniforms.roi","i",a)};
        var roi_hi = ${H("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${H("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Vu=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${H("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${H("uniforms.roi","i",n)};
          var roi_hi = ${H("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${H("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,qu=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${H("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Hi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Hu=(e,t,r,i,a)=>{let[n,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Hi(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ju=(e,t,r,i,a,n,s,l,d,p)=>{let h=r.length===2,[u,m]=h?[0,1]:[2,3],g=e.type.value,$=y=>{let x=y===u?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${d};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[y]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${x} = max(0, min(${x}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${x})`)};
          data[i + 1] = ${y===u?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(u)};
    ${$(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Gu=(e,t,r,i,a)=>{let[n,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Hi(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${l}];
      var width:${h} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Fu=(e,t,r,i,a,n)=>{let s=e.dims,l=Pu(n,t.axes,s.length),d=Uu(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map((_,S)=>_===0?1:d[S]/_),t.keepAspectRatioPolicy!=="stretch"&&(d=Wu(s,p,t)));let h=G("output",e.dataType,d.length),u=B("input",e.dataType,s.length),m=A.size(d),g=s.length===d.length&&s.every((_,S)=>_===d[S]),$=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=u.type.value,v=_=>`
      ${g?"":`
      ${Du(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${qu(u,s)};
              ${Mu(t.nearestMode,r,x)};
              ${Vu(u,h,s,d,p.length,l.length,$)};
              `;case"linear":return`
              ${Nu(h,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Hu(u,h,s,$,y)}`;if(s.length===3||s.length===5)return`${Gu(u,h,s,$,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ju(u,h,s,d,p,l,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(u,h)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?p:""}|${a.length>0?a:""}|${l.length>0?l:""}|${g}|${s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...j(s,d)]})}},Lu=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},$c=(e,t)=>{let r=[],i=[],a=[],n=Lu(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Bu(e.inputs,t,n,r,i,a),e.compute(Fu(e.inputs[0],t,n,r,i,a),{inputs:[0]})},wc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),Ku,Yu,_c,gm=M(()=>{Y(),te(),_e(),re(),Ku=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!A.areEqual(i.dims,[])&&!A.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!A.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],h=a.dims[0],u=A.sizeFromDimension(r.dims,1)/p,m=l===0?a.dims[1]*2:u/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Yu=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],l=A.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,h=e[2].dims[1],u=a===0?h*2:p/i,m=new Array(s,d,p/u,u-h),g=A.computeStrides(m),$=[{type:1,data:n},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[l,p,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,u,d*u,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let v=B("input",e[0].dataType,e[0].dims.length),_=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),I=G("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables(v,_,S,k,I)}

        ${x.mainStart(Dt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",G("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(m)/Dt)},programUniforms:$})}},_c=(e,t)=>{Ku(e.inputs,t),e.compute(Yu(e.inputs,t))}}),Xu,Qu,bc,ym=M(()=>{Y(),te(),re(),Xu=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Qu=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=A.size(n),l=n,d=s,p=n.slice(-1)[0],h=i?n.slice(0,-1).concat(1):[],u=!a&&e.length>3,m=e.length>4,g=i&&r>1,$=i&&r>2,y=r>3,x=64,v=be(p),_=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],S=I=>{let O=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[B("x",e[0].dataType,e[0].dims,v),B("skip",e[1].dataType,e[1].dims,v),B("gamma",e[2].dataType,e[2].dims,v)];u&&T.push(B("beta",e[3].dataType,e[3].dims,v)),m&&T.push(B("bias",e[4].dataType,e[4].dims,v)),T.push(G("output",e[0].dataType,l,v)),g&&T.push(G("mean_output",1,h)),$&&T.push(G("inv_std_output",1,h)),y&&T.push(G("input_skip_bias_sum",e[0].dataType,l,v));let P=ve(e[0].dataType),V=ve(1,v);return`

      ${I.registerUniforms(O).declareVariables(...T)}
      var<workgroup> sum_shared : array<${V}, ${x}>;
      var<workgroup> sum_squared_shared : array<${V}, ${x}>;

      ${I.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":P+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Rt(P,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${pt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${pt("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${P}(mean)`}) *
            ${P}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:h,dataType:1}),r>2&&k.push({dims:h,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${$};${y}`,inputDependencies:e.map((I,O)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:_})}},bc=(e,t)=>{Xu(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Qu(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Zu,Ht,Ju,ji,el,tl,vc,xc,$m=M(()=>{Y(),te(),_e(),re(),Zu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Ht=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ju=(e,t)=>{if(e.length>1){let r=Ht(e,1),i=Ht(e,2),a=Ht(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:a})}else return t},ji=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},el=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${H("uniforms.input_shape","i",r.length)};
            let steps_i = ${H("uniforms.steps","i",r.length)};
            let signs_i = ${H("uniforms.signs","i",r.length)};
            let starts_i = ${H("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,tl=(e,t)=>{let r=e[0].dims,i=A.size(r),a=t.axes.length>0?A.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Ht(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,_)=>ji(v,_,r,a,n)),l=t.ends.map((v,_)=>ji(v,_,r,a,n));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),l.splice(v,0,r[v]),n.splice(v,0,1));let d=n.map(v=>Math.sign(v));n.forEach((v,_,S)=>{if(v<0){let k=(l[_]-s[_])/v,I=s[_],O=I+k*n[_];s[_]=O,l[_]=I,S[_]=-v}});let p=r.slice(0);a.forEach((v,_)=>{p[v]=Math.ceil((l[v]-s[v])/n[v])});let h={dims:p,dataType:e[0].dataType},u=G("output",e[0].dataType,p.length),m=B("input",e[0].dataType,e[0].dims.length),g=A.size(p),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:d},{type:12,data:n},...j(e[0].dims,p)],x=v=>`
      ${v.registerUniforms($).declareVariables(m,u)}
        ${el(m,u,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},vc=(e,t)=>{Zu(e.inputs,t);let r=Ju(e.inputs,t);e.compute(tl(e.inputs,r),{inputs:[0]})},xc=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),rl,il,Sc,kc,wm=M(()=>{Y(),te(),_e(),re(),rl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},il=(e,t)=>{let r=e.dims,i=A.size(r),a=64,n=t.axis;if(n<0&&(n=r.length+n),n<r.length-1)throw new Error("softmax only supports last axis for now.");let s=r[n],l=i/s,d=be(s),p=s/d,h=(x,v)=>v===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:v===2?`max(${x}.x, ${x}.y)`:v===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,u=B("x",e.dataType,e.dims,d),m=G("result",e.dataType,e.dims,d),g=u.type.value,$=ve(e.dataType)==="f32"?`var threadMax = ${g}(-3.402823e+38f);`:`var threadMax = ${g}(-65504.0h);`,y=x=>`
      var<workgroup> rowMaxShared : ${g};
      var<workgroup> rowSumShared : ${g};
      var<workgroup> threadShared : array<${g}, ${a}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${g} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${g}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(u,m)}
      ${x.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${a};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${g}(${h("threadShared[0]",d)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${g}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${g}(${pt("threadShared[0]",d)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`;return{name:"Softmax",shaderCache:{hint:`${d}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:l},programUniforms:[{type:6,data:p}]}),getShaderSource:y}},Sc=(e,t)=>{rl(e.inputs),e.compute(il(e.inputs[0],t))},kc=e=>he({axis:e.axis})}),al,nl,sl,ol,ul,Ec,Ic,_m=M(()=>{Y(),te(),_e(),re(),al=e=>{if(!e||e.length<1)throw new Error("too few inputs")},nl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},sl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${H("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ol=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ul=(e,t)=>{let r=e[0].dims,i=A.size(r),a=e[0].dataType,n=A.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=B("input",a,r.length),d=new Array(t.numOutputs),p=[],h=[],u=0,m=[{type:12,data:i}];for(let $=0;$<t.numOutputs;$++){u+=t.splitSizes[$],d[$]=u;let y=r.slice();y[n]=t.splitSizes[$],h.push(y),s[$]=G(`output${$}`,a,y.length),p.push({dims:h[$],dataType:e[0].dataType})}m.push({type:12,data:d},...j(r,...h));let g=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${sl(d.length)}
  ${ol(s)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${H("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Ec=(e,t)=>{al(e.inputs);let r=e.inputs.length===1?t:nl(e.inputs,t);e.compute(ul(e.inputs,r),{inputs:[0]})},Ic=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),ll,dl,zc,bm=M(()=>{Y(),te(),re(),ll=(e,t,r,i,a)=>{let n=G("output_data",a,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),l=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,h=(u,m,g)=>`select(${m}, ${u}, ${g})`;if(!i)p=n.setByOffset("global_idx",h(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let u=(m,g,$="")=>{let y=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${d.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${$}(${h(y,x,v)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},dl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(A.areEqual(t,r)&&A.areEqual(r,i)),s=t,l=A.size(t);if(n){let p=Bt.calcShape(Bt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=A.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>ll(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...j(i,t,r,s)]})}},zc=e=>{e.compute(dl(e.inputs))}}),Tc,vm=M(()=>{Wf(),ba(),Nf(),Vf(),qf(),Hf(),jf(),Kf(),Qf(),Zf(),Jf(),em(),tm(),rm(),im(),am(),nm(),sm(),om(),um(),lm(),Tp(),dm(),Qp(),pm(),cm(),hm(),fm(),_a(),mm(),gm(),ym(),$m(),wm(),_m(),Jp(),kt(),va(),bm(),Tc=new Map([["Abs",[zd]],["Acos",[Td]],["Acosh",[Cd]],["Add",[dp]],["ArgMax",[Sd,Ji]],["ArgMin",[xd,Ji]],["Asin",[Ad]],["Asinh",[Od]],["Atan",[Rd]],["Atanh",[Bd]],["Attention",[kd]],["AveragePool",[uc,oc]],["BatchNormalization",[Ed]],["BiasAdd",[Id]],["BiasSplitGelu",[lp]],["Cast",[Md,Dd]],["Ceil",[Ud]],["Clip",[Pd]],["Concat",[_p,bp]],["Conv",[aa,ia]],["ConvTranspose",[Op,Ap]],["Cos",[Wd]],["Cosh",[Nd]],["CumSum",[Rp,Bp]],["DepthToSpace",[Dp,Mp]],["DequantizeLinear",[mc,gc]],["Div",[pp]],["Einsum",[Pp,Up]],["Elu",[Vd,Kt]],["Equal",[cp]],["Erf",[qd]],["Exp",[Hd]],["Expand",[Wp]],["FastGelu",[Np]],["Floor",[jd]],["FusedConv",[aa,ia]],["Gather",[qp,Vp]],["GatherElements",[Fp,Gp]],["GatherBlockQuantized",[Hp,jp]],["Gelu",[Gd]],["Gemm",[Kp,Lp]],["GlobalAveragePool",[dc,lc]],["GlobalMaxPool",[fc,hc]],["Greater",[gp]],["GreaterOrEqual",[$p]],["GroupQueryAttention",[tc,ec]],["HardSigmoid",[Jd,Zd]],["InstanceNormalization",[rc]],["LayerNormalization",[ic]],["LeakyRelu",[Fd,Kt]],["Less",[yp]],["LessOrEqual",[wp]],["Log",[op]],["MatMul",[zp]],["MatMulNBits",[ac,nc]],["MaxPool",[pc,cc]],["Mul",[hp]],["MultiHeadAttention",[Xp,Yp]],["Neg",[Kd]],["Not",[Ld]],["Pad",[sc]],["Pow",[fp]],["QuickGelu",[up,Kt]],["Range",[yc]],["Reciprocal",[Yd]],["ReduceMin",[$d]],["ReduceMean",[hd]],["ReduceMax",[yd]],["ReduceSum",[_d]],["ReduceProd",[wd]],["ReduceL1",[fd]],["ReduceL2",[md]],["ReduceLogSum",[vd]],["ReduceLogSumExp",[gd]],["ReduceSumSquare",[bd]],["Relu",[Xd]],["Resize",[$c,wc]],["RotaryEmbedding",[_c]],["Sigmoid",[Qd]],["Sin",[ep]],["Sinh",[tp]],["Slice",[vc,xc]],["SkipLayerNormalization",[bc]],["Split",[Ec,Ic]],["Sqrt",[rp]],["Softmax",[Sc,kc]],["Sub",[mp]],["Tan",[ip]],["Tanh",[ap]],["ThresholdedRelu",[sp,Kt]],["Tile",[Zp]],["Transpose",[td,rd]],["Where",[zc]]])}),Cc,xm=M(()=>{Ke(),mt(),re(),Cc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Je(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});a&&l.push({binding:l.length,resource:a});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Fe(e.programInfo.name)}dispose(){}build(e,t){Je(e.name);let r=this.backend.device,i=[];r.features.has("shader-f16")&&i.push("enable f16;");let a=ed(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,l=r.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Fe(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),pl,cl,hl,Ac,Sm=M(()=>{Ke(),Y(),mt(),Mf(),Pf(),vm(),xm(),pl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},cl=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${pl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},hl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ac=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new hl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Xl(this),this.programManager=new Cc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Kl(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),l=s.kernelType,d=s.kernelName,p=a.programName,h=a.inputTensorViews,u=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let $=Number(m-this.queryTimeBase),y=Number(g-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(x=>({dims:x.dims,dataType:St(x.dataType)})),outputsMetadata:u.map(x=>({dims:x.dims,dataType:St(x.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:p,startTime:$,endTime:y});else{let x="";h.forEach((_,S)=>{x+=`input[${S}]: [${_.dims}] | ${St(_.dataType)}, `});let v="";u.forEach((_,S)=>{v+=`output[${S}]: [${_.dims}] | ${St(_.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${p}" ${x}${v}execution time: ${y-$} ns`)}Er("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Fe()}run(e,t,r,i,a,n){Je(e.name);let s=[];for(let _=0;_<t.length;++_){let S=t[_].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),h=r.length===0?l.map((_,S)=>S):r;if(h.length!==l.length)throw new Error(`Output size ${h.length} must be equal to ${l.length}.`);let u=[],m=[];for(let _=0;_<l.length;++_){if(!Number.isInteger(h[_])||h[_]<-3||h[_]>=n)throw new Error(`Invalid output index: ${h[_]}`);if(h[_]===-3)continue;let S=h[_]===-1,k=h[_]===-2,I=S||k?a(l[_].dataType,l[_].dims):i(h[_],l[_].dataType,l[_].dims);if(u.push(I),I.data===0)continue;let O=this.gpuDataManager.get(I.data);if(!O)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(O),k){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(O)}m.push(O)}if(s.length!==t.length||m.length!==u.length){if(m.length===0)return Fe(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(p){let _=0,S=[];p.forEach(T=>{let P=typeof T.data=="number"?[T.data]:T.data;if(P.length===0)return;let V=T.type===10?2:4,N,J;T.type===10?(J=P.length>4?16:P.length>2?8:P.length*V,N=P.length>4?16:V*P.length):(J=P.length<=2?P.length*V:16,N=16),_=Math.ceil(_/J)*J,S.push(_);let Q=T.type===10?8:4;_+=P.length>4?Math.ceil(P.length/Q)*N:P.length*V});let k=16;_=Math.ceil(_/k)*k;let I=new ArrayBuffer(_);p.forEach((T,P)=>{let V=S[P],N=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(I,V,N.length).set(N);else if(T.type===12)new Uint32Array(I,V,N.length).set(N);else if(T.type===10)new Uint16Array(I,V,N.length).set(N);else if(T.type===1)new Float32Array(I,V,N.length).set(N);else throw new Error(`Unsupported uniform type: ${St(T.type)}`)});let O=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(O.buffer,0,I,0,_),this.gpuDataManager.release(O.id),g={offset:0,size:_,buffer:O.buffer}}let $=this.programManager.normalizeDispatchGroupSize(d),y=$[1]===1&&$[2]===1,x=cl(e,t,y),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,$),this.programManager.setArtifact(x,v),we("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let _=0;_<p.length;_++){let S=p[_],k=S.type,I=typeof S.data=="number"?1:S.data.length,[O,T]=v.uniformVariablesInfo[_];if(k!==O||I!==T)throw new Error(`Uniform variable ${_} mismatch: expect type ${O} with size ${T}, got type ${k} with size ${I} in program "${v.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(v,s,m,$,g),Fe(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Tc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n?.[1]);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[1])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Xi(this,e,t);return Yl(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Oc={};Zt(Oc,{init:()=>Rc});var _r,fl,Rc,km=M(()=>{Y(),Sm(),mt(),te(),_r=class Bc{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(A.size(t)!==A.size(this.dims))throw new Error("Invalid new shape");return new Bc(this.module,this.dataType,this.data,t)}},fl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,a=r>>>2;this.opKernelContext=i[a++];let n=i[a++];this.outputCount=i[a++],this.customDataOffset=i[a++],this.customDataSize=i[a++];let s=[];for(let l=0;l<n;l++){let d=i[a++],p=i[a++],h=i[a++],u=[];for(let m=0;m<h;m++)u.push(i[a++]);s.push(new _r(e,d,p,u))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,l,d)=>new _r(this.module,l,this.output(s,d),d),n=(s,l)=>{let d=zr(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new _r(this.module,s,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.stackAlloc((1+t.length)*4),a=i>>2;this.module.HEAPU32[a++]=t.length;for(let n=0;n<t.length;n++)this.module.HEAPU32[a++]=t[n];return this.module._JsepOutput(this.opKernelContext,e,i)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Rc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new Ac;await n.initialize(r,i),a("webgpu",[n,s=>n.alloc(s),s=>n.free(s),(s,l,d,p=!1)=>{if(p)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${s}, dst=${l}, size=${d}`),n.memcpy(s,l);else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${s}, gpuDataId=${l}, size=${d}`);let h=t.HEAPU8.subarray(s>>>0,(s>>>0)+d);n.upload(l,h)}},async(s,l,d)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await n.download(s,()=>t.HEAPU8.subarray(l>>>0,(l>>>0)+d))},(s,l,d)=>n.createKernel(s,l,d,t.UTF8ToString(t._JsepGetNodeName(l))),s=>n.releaseKernel(s),(s,l,d,p)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let h=new fl(t,n,l);return n.computeKernel(s,h,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else a("webnn")}}),ml,Ia,za,lt,gl,Br,Ta,Ca,Gi,Aa,Oa,Ra,Dc=M(()=>{Bf(),Df(),Y(),Mt(),fa(),Ll(),ml=(e,t)=>{Se()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Ia=async e=>{ml(e.wasm.numThreads,Tr(e.logLevel))},za=async(e,t)=>{{let r=(km(),kr(Oc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},lt=new Map,gl=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,i,i+4)!==0&&$e("Can't get session input/output count."),[t.HEAP32[i/4],t.HEAP32[i/4+1]]}finally{t.stackRestore(r)}},Br=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ta=async(e,t)=>{let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Br(e);let n=0,s=0,l=0,d=[],p=[],h=[];try{if([s,d]=Fl(t),t?.externalData&&a.mountExternalData){let _=[];for(let S of t.externalData){let k=typeof S=="string"?S:S.path;_.push(ya(typeof S=="string"?S:S.data).then(I=>{a.mountExternalData(k,I)}))}await Promise.all(_)}for(let _ of t?.executionProviders??[])if((typeof _=="string"?_:_.name)==="webnn"){if(a.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof _!="string"){let S=_,k=S?.context,I=S?.gpuDevice,O=S?.deviceType,T=S?.numThreads,P=S?.powerPreference;k?a.currentContext=k:I?a.currentContext=await navigator.ml.createContext(I):a.currentContext=await navigator.ml.createContext({deviceType:O,numThreads:T,powerPreference:P})}else a.currentContext=await navigator.ml.createContext();break}n=await a._OrtCreateSession(r,i,s),n===0&&$e("Can't create a session."),a.currentContext&&(a.currentContext=void 0);let[u,m]=gl(n),g=!!t?.enableGraphCapture,$=[],y=[],x=[];for(let _=0;_<u;_++){let S=a._OrtGetInputName(n,_);S===0&&$e("Can't get an input name."),p.push(S),$.push(a.UTF8ToString(S))}for(let _=0;_<m;_++){let S=a._OrtGetOutputName(n,_);S===0&&$e("Can't get an output name."),h.push(S);let k=a.UTF8ToString(S);y.push(k);{if(g&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[k]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}.`);if(g&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(I)}}let v=null;return x.some(_=>_==="gpu-buffer")&&(l=a._OrtCreateBinding(n),l===0&&$e("Can't create IO binding."),v={handle:l,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(_=>Yi(_))}),lt.set(n,[n,p,h,v,g,!1]),[n,$,y]}catch(u){throw p.forEach(m=>a._OrtFree(m)),h.forEach(m=>a._OrtFree(m)),l!==0&&a._OrtReleaseBinding(l),n!==0&&a._OrtReleaseSession(n),u}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s),d.forEach(u=>a._free(u)),a.unmountExternalData?.()}},Ca=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle),t._OrtReleaseBinding(s.handle)),t.jsepOnReleaseSession?.(e),a.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(i),lt.delete(e)},Gi=(e,t,r,i,a,n=!1)=>{if(!e){t.push(0);return}let s=Se(),l=e[0],d=e[1],p=e[3],h,u;if(l==="string"&&p==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;u=zr(Ki(l),d);let y=s.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=y(i,a,$,u)}else{let $=e[2];if(Array.isArray($)){u=4*$.length,h=s._malloc(u),r.push(h);let y=h/4;for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.HEAPU32[y++]=Ee($[x],r)}}else u=$.byteLength,h=s._malloc(u),r.push(h),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,u),h)}let m=s.stackSave(),g=s.stackAlloc(4*d.length);try{let $=g/4;d.forEach(x=>s.HEAP32[$++]=x);let y=s._OrtCreateTensor(Ki(l),h,u,g,d.length,Yi(p));y===0&&$e(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(y)}finally{s.stackRestore(m)}},Aa=async(e,t,r,i,a,n)=>{let s=Se(),l=lt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],h=l[2],u=l[3],m=l[4],g=l[5],$=t.length,y=i.length,x=0,v=[],_=[],S=[],k=[],I=s.stackSave(),O=s.stackAlloc($*4),T=s.stackAlloc($*4),P=s.stackAlloc(y*4),V=s.stackAlloc(y*4);try{[x,v]=Gl(n);for(let K=0;K<$;K++)Gi(r[K],_,k,e,t[K],m);for(let K=0;K<y;K++)Gi(a[K],S,k,e,$+i[K],m);let N=O/4,J=T/4,Q=P/4,ae=V/4;for(let K=0;K<$;K++)s.HEAPU32[N++]=_[K],s.HEAPU32[J++]=p[t[K]];for(let K=0;K<y;K++)s.HEAPU32[Q++]=S[K],s.HEAPU32[ae++]=h[i[K]];if(u&&!g){let{handle:K,outputPreferredLocations:oe,outputPreferredLocationsEncoded:pe}=u;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);for(let X=0;X<$;X++){let ne=t[X];await s._OrtBindInput(K,p[ne],_[X])!==0&&$e(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<y;X++){let ne=i[X];a[X]?.[3]?s._OrtBindOutput(K,h[ne],S[X],0)!==0&&$e(`Can't bind pre-allocated output[${X}] for session=${e}.`):s._OrtBindOutput(K,h[ne],0,pe[ne])!==0&&$e(`Can't bind output[${X}] to ${oe[X]} for session=${e}.`)}lt.set(e,[d,p,h,u,m,!0])}s.jsepOnRunStart?.(d);let se;u?se=await s._OrtRunWithBinding(d,u.handle,y,P,x):se=await s._OrtRun(d,T,O,$,V,y,P,x),se!==0&&$e("failed to call OrtRun().");let ie=[];for(let K=0;K<y;K++){let oe=s.HEAPU32[P/4+K];if(oe===S[K]){ie.push(a[K]);continue}let pe=s.stackSave(),X=s.stackAlloc(4*4),ne=!1,R,U=0;try{s._OrtGetTensorData(oe,X,X+4,X+8,X+12)!==0&&$e(`Can't access output tensor data on index ${K}.`);let ee=X/4,fe=s.HEAPU32[ee++];U=s.HEAPU32[ee++];let me=s.HEAPU32[ee++],Be=s.HEAPU32[ee++],We=[];for(let Ie=0;Ie<Be;Ie++)We.push(s.HEAPU32[me/4+Ie]);s._OrtFree(me);let Re=We.reduce((Ie,ke)=>Ie*ke,1);R=St(fe);let Ae=u?.outputPreferredLocations[i[K]];if(R==="string"){if(Ae==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");let Ie=[],ke=U/4;for(let rt=0;rt<Re;rt++){let it=s.HEAPU32[ke++],yt=rt===Re-1?void 0:s.HEAPU32[ke]-it;Ie.push(s.UTF8ToString(it,yt))}ie.push([R,We,Ie,"cpu"])}else if(Ae==="gpu-buffer"&&Re>0){let Ie=s.jsepGetBuffer;if(!Ie)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ke=Ie(U),rt=zr(fe,Re);if(rt===void 0||!ga(R))throw new Error(`Unsupported data type: ${R}`);ne=!0,ie.push([R,We,{gpuBuffer:ke,download:s.jsepCreateDownloader(ke,rt,R),dispose:()=>{s._OrtReleaseTensor(oe)}},"gpu-buffer"])}else{let Ie=ma(R),ke=new Ie(Re);new Uint8Array(ke.buffer,ke.byteOffset,ke.byteLength).set(s.HEAPU8.subarray(U,U+ke.byteLength)),ie.push([R,We,ke,"cpu"])}}finally{s.stackRestore(pe),R==="string"&&U&&s._free(U),ne||s._OrtReleaseTensor(oe)}}return u&&!m&&(s._OrtClearBoundOutputs(u.handle),lt.set(e,[d,p,h,u,m,!1])),ie}finally{s.stackRestore(I),_.forEach(N=>s._OrtReleaseTensor(N)),S.forEach(N=>s._OrtReleaseTensor(N)),k.forEach(N=>s._free(N)),x!==0&&s._OrtReleaseRunOptions(x),v.forEach(N=>s._free(N))}},Oa=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},Ra=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),dt,Pe,Ct,jt,Gt,br,Fi,vr,bt,vt,yl,Mc,Pc,Uc,Wc,Nc,Vc,qc,Hc=M(()=>{Ke(),Dc(),Mt(),Dr(),dt=()=>!!ge.wasm.proxy&&typeof document<"u",Ct=!1,jt=!1,Gt=!1,vr=new Map,bt=(e,t)=>{let r=vr.get(e);r?r.push(t):vr.set(e,[t])},vt=()=>{if(Ct||!jt||Gt||!Pe)throw new Error("worker not ready")},yl=e=>{switch(e.data.type){case"init-wasm":Ct=!1,e.data.err?(Gt=!0,Fi[1](e.data.err)):(jt=!0,Fi[0]()),br&&(URL.revokeObjectURL(br),br=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=vr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Mc=async()=>{if(!jt){if(Ct)throw new Error("multiple calls to 'initWasm()' detected.");if(Gt)throw new Error("previous call to 'initWasm()' failed.");if(Ct=!0,dt())return new Promise((e,t)=>{Pe?.terminate(),Hl().then(([r,i])=>{try{Pe=i,Pe.onerror=n=>t(n),Pe.onmessage=yl,Fi=[e,t];let a={type:"init-wasm",in:ge};Pe.postMessage(a),br=r}catch(a){t(a)}},t)});try{await ha(ge.wasm),await Ia(ge),jt=!0}catch(e){throw Gt=!0,e}finally{Ct=!1}}},Pc=async e=>{if(dt())return vt(),new Promise((t,r)=>{bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Pe.postMessage(i)});await za(ge,e)},Uc=async e=>dt()?(vt(),new Promise((t,r)=>{bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Pe.postMessage(i,[e.buffer])})):Br(e),Wc=async(e,t)=>{if(dt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return vt(),new Promise((r,i)=>{bt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Pe.postMessage(a,n)})}else return Ta(e,t)},Nc=async e=>{if(dt())return vt(),new Promise((t,r)=>{bt("release",[t,r]);let i={type:"release",in:e};Pe.postMessage(i)});Ca(e)},Vc=async(e,t,r,i,a,n)=>{if(dt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return vt(),new Promise((s,l)=>{bt("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:n}};Pe.postMessage(p,Ra(d))})}else return Aa(e,t,r,i,a,n)},qc=async e=>{if(dt())return vt(),new Promise((t,r)=>{bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Pe.postMessage(i)});Oa(e)}}),Li,$l,jc,Em=M(()=>{Ke(),Hc(),Y(),ca(),Ll(),Li=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},$l=e=>{switch(e[3]){case"cpu":return new Oe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ga(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Oe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},jc=class{async fetchModelAndCopyToWasmMemory(e){return Uc(await ya(e))}async loadModel(e,t){Je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Wc(r,t),Fe()}async dispose(){return Nc(this.sessionId)}async run(e,t,r){Je();let i=[],a=[];Object.entries(e).forEach(u=>{let m=u[0],g=u[1],$=this.inputNames.indexOf(m);if($===-1)throw new Error(`invalid input '${m}'`);i.push(g),a.push($)});let n=[],s=[];Object.entries(t).forEach(u=>{let m=u[0],g=u[1],$=this.outputNames.indexOf(m);if($===-1)throw new Error(`invalid output '${m}'`);n.push(g),s.push($)});let l=i.map((u,m)=>Li(u,()=>`input "${this.inputNames[a[m]]}"`)),d=n.map((u,m)=>u?Li(u,()=>`output "${this.outputNames[s[m]]}"`):null),p=await Vc(this.sessionId,a,l,s,d,r),h={};for(let u=0;u<p.length;u++)h[this.outputNames[s[u]]]=n[u]??$l(p[u]);return Fe(),h}startProfiling(){}endProfiling(){qc(this.sessionId)}}}),wl,Gc,Im=M(()=>{Ke(),Hc(),Em(),Dr(),wl=()=>{if((typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0),ge.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let e=typeof navigator>"u"?mf("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Gc=class{async init(e){wl(),await Mc(),await Pc(e)}async createInferenceSessionHandler(e,t){let r=new jc;return await r.loadModel(e,t),Promise.resolve(r)}}}),Fc={};Zt(Fc,{wasmBackend:()=>Lc});var Lc,zm=M(()=>{Im(),Lc=new Gc});Ke();Ke();Ke();var Tm="1.20.0",Cm=Ul;{let e=(zm(),kr(Fc)).wasmBackend;Ot("webgpu",e,5),Ot("webnn",e,5),Ot("cpu",e,10),Ot("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:Tm,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */export{ge as b,Cm as x,Oe as z};
