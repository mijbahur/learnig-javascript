# Operating System — Mid-Term Exam Prep
### Short Questions (5 Marks) & Broad Questions (10 Marks)
*Based on: Introduction to OS · Computer System Architecture · OS Structures · Process · CPU Scheduling · Shell Commands*

---

## Unit 1: Introduction to Operating Systems

### Short Questions (5 Marks)

**Q1. What is an Operating System? What are its main functions.**
- A system software that acts as an interface between the user and computer hardware.
- Manages hardware resources, controls program execution, and provides a convenient environment for users.
- Acts as a **resource allocator** (CPU, memory, I/O) and a **control program** (supervises execution).
- Key functions: process management, memory management, file-system management, I/O management, protection/security.

**Q2. Differentiate between Multiprogramming and Multitasking.**
| Multiprogramming | Multitasking (Time-Sharing) |
|---|---|
| Keeps CPU busy by running multiple programs; when one waits on I/O, another runs | CPU rapidly switches between tasks, giving the illusion of parallel execution |
| No strict response-time requirement | Response time should be under ~1 second |
| Focus: CPU utilization | Focus: fast, interactive response for each user |
| Uses job scheduling | Uses CPU scheduling + virtual memory |

**Q3. What are Interrupts? Explain their types.**
- A signal to the CPU indicating an event needs immediate attention.
- CPU pauses the current task, executes the Interrupt Service Routine (ISR), then resumes.
- Types: **Hardware** (from devices), **Software/Trap** (from programs — e.g., divide by zero), **Vectored** (device directly signals CPU), **Polling** (CPU periodically checks devices).

**Q4. What is a System Call? Why is it needed?**
- The mechanism a user program uses to request a service from the OS (file access, process control, memory management).
- Switches the CPU from **user mode → kernel mode** so privileged operations can run safely, then switches back.
- Examples: `read()`, `write()`, `fork()`, `exec()`.

**Q5. Explain Dual-Mode Operation.**
- Protects the system from user errors by separating execution into two modes:
  - **User Mode:** runs normal applications (restricted, cannot execute privileged instructions).
  - **Kernel Mode:** runs OS code with full hardware access.
- A **mode bit** tells the CPU which mode it is in. Some CPUs add a third mode for virtual machines (VMM mode).

**Q6. What is DMA (Direct Memory Access)? Why is it used?**
- Allows high-speed I/O devices to transfer data directly to/from main memory **without CPU involvement**.
- Only one interrupt is generated per data block (not per byte), reducing CPU overhead and increasing efficiency.

**Q7. What is the difference between a Bootstrap Program and the Kernel?**
- **Bootstrap program:** small program in ROM/firmware that runs at power-on, initializes hardware, and loads the kernel into memory (a.k.a. bootloader).
- **Kernel:** the core of the OS; the one program that always runs once loaded, managing all system operations.

**Q8. What are System Daemons?**
- Background services/processes started once the kernel has loaded, running for the lifetime of the system to handle tasks like logging, printing, or networking.

---

### Broad Questions (10 Marks)

**Q1. Describe the Storage Structure / Storage Hierarchy of a computer system.**
- **Main Memory:** directly accessed by the CPU, volatile (data lost when powered off), made from DRAM.
- **Secondary Storage:** permanent, non-volatile storage such as HDDs; disks are divided into tracks and sectors.
- **Non-Volatile Memory (NVM):** faster than HDDs, retains data without power (e.g., SSDs); increasingly popular due to speed and falling cost.
- **Storage Hierarchy:** devices are organized by speed, cost, and size — fastest/most expensive (registers, cache) at the top, slowest/cheapest (tape, disk) at the bottom.
- **Caching:** copying frequently used data into faster storage (e.g., RAM) to speed up access; the OS decides what stays cached and what is replaced.
- **Device Drivers** let the OS communicate with different hardware devices uniformly.

**Q2. Explain the Operating System Services in detail.**
Services are divided into two groups:

*A. Services for Users and Programs*
1. **User Interface** — CLI, GUI, or touchscreen.
2. **Program Execution** — loads and runs programs; handles normal or error termination.
3. **I/O Operations** — manages input/output between programs and devices.
4. **File-System Management** — create, delete, read, write files; manage permissions.
5. **Communication** — inter-process/inter-system exchange of information via message passing or shared memory.
6. **Error Detection** — continuously checks CPU, memory, I/O, and program errors to keep the system stable.

*B. Services for System Efficiency*
1. **Resource Allocation** — divides CPU, memory, and I/O devices among users/processes.
2. **Logging** — records resource usage.
3. **Protection and Security** — ensures processes don't interfere with each other; authenticates users.

**Q3. Explain System Calls — how parameters are passed, and their types.**
- System calls are the programming interface to OS services, usually accessed via APIs (Win32, POSIX, Java API) rather than directly.
- **Parameter-passing methods:**
  1. Registers — fastest, but limited in number/size.
  2. Memory block/table — address of a block holding parameters is passed (used in Linux/Solaris).
  3. Stack — parameters pushed by the program, popped by the OS.
- **Types of system calls (5 main categories):**
  1. **Process Control** — create/end process, load/execute, wait/signal, allocate memory.
  2. **File Management** — create, delete, open, read, write, close.
  3. **Device Management** — request/release device, read/write, attach/detach.
  4. **Information Maintenance** — get/set system time, access process status.
  5. **Communication** — create/remove communication links, send/receive messages, shared memory.
  (Some texts add **Protection** — set/get permissions — as a sixth category.)
- Execution flow: program runs in user mode → makes a system call → CPU switches to kernel mode → OS performs the task → control returns to user mode.

**Q4. Explain Computer-System Operation with reference to interrupt-driven I/O.**
- CPU and I/O devices execute concurrently; each device controller manages a specific device using a local buffer.
- The OS uses **device drivers** to manage communication with controllers.
- Data moves between main memory and local buffers; when I/O completes, the device controller sends an **interrupt** to the CPU.
- **Interrupt-driven I/O cycle:** CPU issues I/O command → device performs operation → device sends interrupt → CPU executes ISR → CPU resumes original task.
- The OS preserves CPU state (registers, program counter) before handling the interrupt, and can distinguish between **polling** (CPU checks periodically) and **vectored** (device directly requests attention) interrupts.

**Q5. Explain the different components/perspectives of an Operating System (user view vs. system view) and why a single definition of "OS" is difficult.**
- **User perspective:** wants convenience, ease of use, good performance — usually doesn't care about resource utilization.
- **System (shared/mainframe) perspective:** OS must efficiently manage resources among multiple users, acting as resource allocator and control program.
- **Device perspective:** mobile devices need resource-limited, battery-optimized OS with touch/voice interfaces; embedded systems run with little or no user interaction.
- No universal definition exists — broadly, "everything a vendor ships when you order an OS." The **kernel** is the only program guaranteed to always run; other parts include system programs (utilities) and application programs (user-installed), plus middleware providing services like databases and multimedia frameworks.

---

## Unit 2: Computer System Architecture

### Short Questions (5 Marks)

**Q1. Differentiate between Multiprocessor and Clustered Systems.**
| Multiprocessor System | Clustered System |
|---|---|
| Two or more processors **share the same memory** | Multiple independent computers (nodes), each with own processor/memory/storage |
| Connected internally on one machine | Connected via a high-speed network |
| Used for parallel execution, speed | Used for high availability & load balancing |
| Example: servers with multi-core CPUs | Example: cloud computing clusters, Google data centers |

**Q2. What is Symmetric vs Asymmetric Multiprocessing?**
- **Asymmetric Multiprocessing (AMP):** each processor is assigned a specific, fixed task.
- **Symmetric Multiprocessing (SMP):** all processors are equal and can perform any task, sharing the workload.

**Q3. What is a Clustered System? Explain its types.**
- Multiple independent computers (nodes) that work together as a single system for high availability and load balancing.
- **Asymmetric Clustering:** one node stays in standby (hot-spare) mode.
- **Symmetric Clustering:** all nodes are active and monitor each other.

**Q4. What are the advantages of a Multiprocessor System?**
- Increased throughput — more work completed in less time.
- Economy of scale — shared resources reduce cost per unit of processing.
- Higher reliability — if one processor fails, others continue operating (graceful degradation).

**Q5. Explain the transition from User Mode to Kernel Mode using a timer interrupt.**
- The OS sets a counter that decreases with every clock tick (timer).
- When the counter reaches zero, a **timer interrupt** is generated.
- This forces control back to the OS, preventing any single process from monopolizing the CPU — a key protection mechanism in time-sharing systems.

---

### Broad Questions (10 Marks)

**Q1. Describe the different types of Computer Systems based on the number of processors.**
1. **Single Processor System** — one CPU performs all fetch/decode/execute; may have multiple cores but one main chip. Examples: PCs, laptops, small embedded systems.
2. **Multiprocessor System** — two or more processors share memory and execute in parallel.
   - *Advantages:* increased throughput, economy of scale, higher reliability.
   - *Types:* Asymmetric (AMP — fixed task per processor) vs Symmetric (SMP — all processors do all tasks); modern dual-core designs place multiple cores on a single chip for parallelism and power efficiency.
3. **Clustered System** — multiple independent nodes networked together for high availability and load balancing (Asymmetric = standby node; Symmetric = all nodes active and monitoring each other). Used in cloud computing.

**Q2. Explain Operating-System Operations, including Multiprogramming, Multitasking, and Dual-Mode Operation.**
- **OS Operations basics:** Bootstrap program initializes and loads the kernel; system daemons start after boot; the OS is interrupt-driven, responding to hardware interrupts (from devices) and software interrupts/traps (from programs, e.g., errors); system calls let programs request OS services.
- **Multiprogramming:** keeps CPU busy by running several programs — when one waits for I/O, another executes.
- **Multitasking (time-sharing):** CPU switches rapidly among tasks so they appear simultaneous; response time should be under ~1 second; relies on CPU scheduling (choosing the next job) and virtual memory (running processes not fully loaded in memory).
- **Dual-Mode / Multimode Operation:** protects the system from user errors via **User Mode** (restricted) and **Kernel Mode** (privileged); a mode bit tracks the current mode; some CPUs add a VMM mode for virtual machines. A timer interrupt forces periodic transitions back to kernel mode so no process can hog the CPU indefinitely.

**Q3. Explain the main components the OS is responsible for managing (Process, Memory, File-System, Caching).**
- **Process Management:** a process is a running program needing CPU, memory, I/O, files. OS creates/deletes processes, suspends/resumes them, handles inter-process communication, and prevents deadlocks. (Single-threaded processes execute one instruction stream; multi-threaded processes run multiple parts concurrently.)
- **Memory Management:** OS decides which programs/data stay in memory, aiming to keep the CPU busy and give fast response; tracks used memory, moves data in/out, allocates and frees memory as needed.
- **File-System Management:** organizes data as files/folders, hides hardware details; handles creation/deletion, access control, safe storage, and backup.
- **Caching:** keeps frequently used data in faster memory; on a request, the OS checks the cache first (fast hit) or falls back to slower storage and copies the data into cache (miss); the OS manages replacement policy.

---

## Unit 3: Operating-System Structures

### Short Questions (5 Marks)

**Q1. What is the difference between Policy and Mechanism in OS design?**
- **Policy** — decides *what* should be done (the goal/rule).
- **Mechanism** — implements *how* it is done.
- Separating the two makes the OS more flexible: a policy can change without altering the underlying mechanism.

**Q2. What are the main OS design goals?**
- **User goals:** system should be easy to use, fast, reliable, and safe.
- **System goals:** should be easy to build, maintain, efficient, and flexible for developers.

**Q3. Compare Portability and Performance in OS implementation.**
- High-level languages (C, C++) make an OS easier to **port** to new hardware.
- But high-level code generally runs **slower** than hand-written low-level (assembly) code.
- Real OSes mix languages: assembly for boot code/context switching, C for the kernel core, and scripting languages (Python, Perl, Shell) for tools and system management.

**Q4. What is the Simple Structure of an OS? Give an example.**
- The simplest OS structure, used for small/limited systems (e.g., MS-DOS, early UNIX).
- Poorly separated — programs can directly access I/O routines, creating security risks; if one program crashes, the whole OS can crash.

**Q5. What is a Monolithic Kernel?**
- A single large kernel manages everything — file, memory, device, and process management — with direct access to all hardware.
- Fast (no extra layering) but hard to maintain/debug, and a kernel bug can crash the entire system.

**Q6. What are Loadable Kernel Modules (LKMs)?**
- Used in Modular Systems; the kernel is built from independent, object-oriented components that communicate over defined interfaces.
- Modules can be loaded on demand, giving flexibility similar to a layered design. Examples: Linux, Solaris.

---

### Broad Questions (10 Marks)

**Q1. Explain the different Operating System structures with their advantages and disadvantages.**
1. **Simple Structure** — minimal separation of layers; programs can call I/O routines directly.
   - *Adv:* easy to design, good for small systems, layers interact easily.
   - *Disadv:* low abstraction (security risk), one crash brings down the whole OS, unsuitable for large systems.
2. **Monolithic Structure** — one large kernel manages all services directly.
   - *Adv:* fast execution, efficient for batch/time-sharing, no context-switch overhead between services.
   - *Disadv:* large and hard to maintain, a bug can crash the system, poor modularity.
3. **Layered Structure** — OS divided into layers from Layer 0 (hardware) to Layer N (UI); each layer uses only the services of the layer below.
   - *Adv:* easy to debug (lower layers tested first), clear separation of responsibilities, easy to maintain.
   - *Disadv:* lower performance (each layer adds overhead), requires careful coordination between layers.
4. **Microkernel Structure** — only essential functions (IPC, basic scheduling, basic memory) stay in the kernel; other services run in user space.
   - *Adv:* more secure and stable, easy to extend.
   - *Disadv:* more message-passing overhead, potentially slower.
5. **Modular Systems (LKMs)** — object-oriented, independently loadable components communicating over interfaces (Linux, Solaris).
6. **Hybrid Systems** — combine features of multiple structures for performance and flexibility (e.g., Windows: monolithic + microkernel parts; macOS: Mach + UNIX + modular; Linux: monolithic but modular).

**Q2. Explain the roles of the Linker and Loader, and why applications are OS-specific.**
- **Linker:** combines multiple compiled object modules into one executable; used in modular programming; also called a link editor/binder.
- **Loader:** copies the linked program from storage into main memory, making it ready to execute; a special type of system program.
- **Why apps are OS-specific:** each OS has its own system calls, file formats, and execution environment, so a binary built for one OS generally cannot run on another.
  - Cross-platform options: interpreted languages (Python, Ruby — interpreter exists per OS), VM-based languages (Java — same bytecode runs everywhere via the JVM), or compiled languages (C/C++ — must be recompiled for each OS/architecture).
  - **ABI (Application Binary Interface):** the low-level interface between compiled binaries and the OS — defines how code interacts with CPU architecture, system calls, data types, and calling conventions. It is the binary-level counterpart of an API.

---

## Unit 4: Process

### Short Questions (5 Marks)

**Q1. Define a Process. How is it different from a Program?**
- A **process** is an instance of a program in execution — the basic unit of work the OS schedules.
- A **program** is passive (stored on disk); a **process** is active (loaded into memory and running).
- One program can spawn many processes (e.g., multiple Chrome windows for different users).

**Q2. What are the components of a process?**
1. **Text/Code** — the instructions to execute.
2. **Data** — global variables and information.
3. **Stack** — temporary data: function parameters, return addresses.
4. **Heap** — dynamically allocated memory.
5. **PCB (Process Control Block)** — stores process state, priority, memory info, etc.

**Q3. List and briefly explain the five process states.**
1. **New** — process just created, not yet given CPU/resources.
2. **Ready** — waiting in the ready queue for CPU.
3. **Running** — currently executing on the CPU.
4. **Waiting/Blocked** — cannot continue until an event (e.g., I/O) occurs.
5. **Terminated** — finished execution and removed from the OS.

**Q4. What is a Thread? Why is it called a lightweight process?**
- A thread is the smallest unit of execution inside a process, having its own program counter, stack, and registers.
- Threads within the same process share code, data, and files, making them cheaper to create/switch than full processes — hence "lightweight process."
- Example: a video player uses separate threads for audio and video playback.

**Q5. What is Context Switching? List its triggers.**
- The OS saves the state of the currently running process and loads the state of another so it can run — enables multitasking.
- Triggers: time quantum expiry (Round Robin), a higher-priority process arrival, an I/O request, an interrupt, or process completion.

**Q6. Differentiate between Zombie and Orphan processes.**
| Zombie Process | Orphan Process |
|---|---|
| Child has terminated, but parent hasn't called `wait()` yet | Parent terminates before the child does |
| Still has an entry in the process table | Child is "adopted" by `init` (PID 1) in UNIX |
| Exists temporarily so parent can read exit status | Continues running normally under new parent |

**Q7. What is Cascading Termination?**
- When a parent process terminates, the OS automatically terminates all its children, grandchildren, and so on — because some OSes don't allow children to exist after the parent dies.

**Q8. Differentiate between Long-Term and Short-Term Schedulers.**
| Long-Term Scheduler (Job Scheduler) | Short-Term Scheduler (CPU Scheduler) |
|---|---|
| Chooses which jobs enter the ready queue | Chooses which ready process runs on the CPU next |
| Runs rarely (seconds/minutes) | Runs very frequently (milliseconds) |
| Controls degree of multiprogramming | Must be fast |

**Q9. What is the difference between an I/O-bound and a CPU-bound process?**
- **I/O-bound:** spends most of its time on I/O; has many short CPU bursts.
- **CPU-bound:** spends most of its time computing; has fewer, longer CPU bursts.

---

### Broad Questions (10 Marks)

**Q1. Explain the Process Control Block (PCB) and its role in Context Switching.**
- The PCB is a data structure the OS maintains **per process** to manage it throughout its lifecycle. It stores:
  1. Process ID (PID)
  2. Process State (new/ready/running/waiting/terminated)
  3. Program Counter (address of next instruction)
  4. CPU Registers (accumulators, index registers, condition codes, etc.)
  5. CPU Scheduling Information (priority, queue pointers)
  6. Accounting Information (CPU time used, jobs, resource usage)
  7. Memory Management Information (base/limit registers, page/segment tables)
  8. I/O Status Information (assigned devices, I/O status)
- **Role in context switching:** when the CPU switches from one process to another, the OS (1) saves the current process's registers/PC/state into its PCB, (2) loads the next process's PCB values into the CPU, and (3) resumes the new process exactly where it left off. This is why context switching has overhead — no useful work is done during the switch itself.

**Q2. Explain Process Creation and Process Termination in detail (UNIX fork/exec/wait model).**
*Process Creation:*
- A **parent** process creates a **child** process, forming a **process tree**; each process has a unique PID.
- Resource-sharing options: share all resources, share a subset, or share none.
- Execution options: parent and child run concurrently, or parent waits via `wait()`.
- Address-space options: child gets a **duplicate** of the parent's memory (`fork()` in UNIX), or loads an entirely **new program** (`exec()` in UNIX; `CreateProcess()`/`spawn()` in Windows).
- UNIX flow: `fork()` creates the child (child's PID = 0, parent receives child's PID > 0) → child calls `exec()` to run a new program → parent calls `wait()` to pause until the child finishes.
- Windows uses `CreateProcess()` with `STARTUPINFO`/`PROCESS_INFORMATION` structures, then `WaitForSingleObject()` and `CloseHandle()`.

*Process Termination:*
- A process terminates by executing its last instruction and calling `exit()`, which returns a status to the parent and releases all resources.
- A parent may forcibly kill a child with `abort()` — e.g., if the child exceeds resource limits, its task is no longer needed, or the OS disallows orphaned children.
- **Cascading termination:** killing the parent kills the whole descendant tree.
- The parent retrieves the child's exit status via `pid = wait(&status)`.
- If the parent never calls `wait()`, the terminated child becomes a **zombie**; if the parent dies first, the child becomes an **orphan** (adopted by `init` in UNIX).

**Q3. Explain Inter-Process Communication (IPC): Shared Memory vs Message Passing.**
- IPC lets processes exchange data, coordinate actions, and share resources — on the same machine or across a network.
- **Shared Memory:**
  - A memory region accessible by multiple processes simultaneously; very fast since the kernel is only involved in setup, not every read/write.
  - Requires careful synchronization to avoid conflicts.
  - Types: **Anonymous** (not linked to a file, created via `shm_open`/`mmap`/`fork`, only for related processes) and **Mapped** (linked to a file, accessible by unrelated processes).
- **Message Passing:**
  - Processes exchange messages instead of sharing variables; works well in distributed systems.
  - *Direct communication:* processes name each other explicitly (`send(P, msg)`, `receive(Q, msg)`); one link per process pair.
  - *Indirect communication:* processes send/receive via a shared **mailbox**; senders/receivers don't need to know each other's identity, but ambiguity arises when multiple processes share a mailbox (solved by restricting links, allowing only one receiver at a time, or arbitrary selection).
  - *Blocking vs non-blocking:* blocking send/receive wait for their counterpart (both together = a **rendezvous**); non-blocking versions return immediately.
  - *Buffering:* zero capacity (rendezvous, no queue), bounded capacity (fixed-size queue, sender waits if full), unbounded capacity (sender never waits).
  - *Advantages:* flexible, no special OS support required. *Disadvantages:* harder to guarantee message order, managing queue size, and portability across OSes.

**Q4. Explain Process Synchronization using the Producer–Consumer (Bounded Buffer) Problem.**
- Synchronization ensures orderly execution, data consistency, and prevents race conditions between cooperating processes.
- **Producer** generates data and places it in a shared buffer; **Consumer** removes and uses it.
- Coordination rules: producer must not write to a full buffer; consumer must not read from an empty buffer.
- **Bounded buffer** implementation uses a circular array (`buffer[BUFFER_SIZE]`) with `in` (next free slot) and `out` (next full slot) pointers:
  ```
  Producer: wait while ((in+1) % SIZE == out);  buffer[in] = item;  in = (in+1) % SIZE;
  Consumer: wait while (in == out);              item = buffer[out]; out = (out+1) % SIZE;
  ```
- Limitation: only `BUFFER_SIZE - 1` slots are usable, because one empty slot is needed to distinguish "full" from "empty."

---

## Unit 5: CPU Scheduling

### Short Questions (5 Marks)

**Q1. What is CPU Scheduling? Why is it needed?**
- The method the OS uses to decide which ready process gets the CPU next.
- Needed to prevent the CPU from sitting idle during I/O waits, to maximize CPU utilization, and to ensure fairness and good response time.

**Q2. What is a CPU Burst and an I/O Burst?**
- **CPU burst:** time a process spends executing on the CPU before requesting I/O.
- **I/O burst:** time a process spends waiting for an I/O operation.
- Processes alternate between the two; most processes have many short CPU bursts and a few long ones.

**Q3. When do CPU scheduling decisions occur? Which are preemptive/non-preemptive?**
1. Running → Waiting (e.g., I/O request) — non-preemptive.
2. Running → Ready (e.g., interrupt) — preemptive.
3. Waiting → Ready (I/O completion) — preemptive.
4. Running → Terminated — non-preemptive.

**Q4. List the CPU Scheduling Criteria.**
1. **CPU Utilization** — keep CPU as busy as possible.
2. **Throughput** — number of processes completed per time unit.
3. **Turnaround Time** — minimize.
4. **Waiting Time** — minimize.
5. **Response Time** — minimize (especially for interactive systems).

**Q5. Define Arrival Time, Burst Time, Completion Time, Turnaround Time, and Waiting Time.**
- **Arrival Time (AT):** when the process enters the ready queue.
- **Burst Time (BT):** CPU time the process needs.
- **Completion Time (CT):** when the process finishes.
- **Turnaround Time (TAT) = CT − AT**
- **Waiting Time (WT) = TAT − BT**

**Q6. What is the difference between Preemptive and Non-Preemptive Scheduling?**
| Non-Preemptive | Preemptive |
|---|---|
| Running process can't be interrupted; CPU is freed only when the process finishes or goes to waiting | OS can interrupt a running process (higher-priority arrival, time slice ends) |
| Examples: FCFS, non-preemptive SJF, non-preemptive Priority | Examples: Round Robin, SRTF, preemptive Priority |

**Q7. What is the Convoy Effect in FCFS scheduling?**
- Short processes get stuck waiting behind one long process that arrived earlier, since FCFS is non-preemptive — leading to high average waiting time.

**Q8. What is Starvation in scheduling? Which algorithm suffers most from it?**
- A process waits indefinitely because lower-priority processes are continually skipped in favor of higher-priority ones.
- Common in **Priority Scheduling**; can be solved using **aging** (gradually increasing the priority of waiting processes).

---

### Broad Questions (10 Marks)

**Q1. Explain the FCFS (First Come First Served) Scheduling algorithm with a numerical example.**
- Non-preemptive; the process that arrives first is executed first, uninterrupted, until completion.
- *Advantages:* simple, fair by arrival order, no starvation.
- *Disadvantages:* convoy effect — short jobs wait behind long ones; unsuitable for time-sharing.

Example (Arrival order: P3, P2, P1, P4):
| Process | BT | AT | CT | TAT = CT−AT | WT = TAT−BT |
|---|---|---|---|---|---|
| P1 | 6 | 2 | 17 | 15 | 9 |
| P2 | 8 | 1 | 11 | 10 | 2 |
| P3 | 3 | 0 | 3 | 3 | 0 |
| P4 | 4 | 4 | 21 | 17 | 13 |

Average WT = (9+2+0+13)/4 = **6.0 ms**  Average TAT = (15+10+3+17)/4 = **11.25 ms**

**Q2. Explain Shortest Job First (SJF) Scheduling — both preemptive and non-preemptive — with an example.**
- SJF picks the process with the smallest burst time.
- **Non-preemptive SJF:** once started, a process runs to completion, even if a shorter job arrives.
- **Preemptive SJF (Shortest Remaining Time First / SRTF):** the CPU is taken from the running process if a new arrival has a shorter remaining burst.
- *Advantage:* minimizes average waiting time (provably optimal for non-preemptive case). *Disadvantage:* requires knowing burst time in advance; can cause starvation of long jobs.

Example (Non-preemptive SJF):
| Process | BT | AT | CT | TAT | WT |
|---|---|---|---|---|---|
| P1 | 2 | 2 | 5 | 3 | 1 |
| P2 | 5 | 4 | 14 | 10 | 5 |
| P3 | 3 | 0 | 3 | 3 | 0 |
| P4 | 4 | 1 | 9 | 8 | 4 |

Average WT = (1+5+0+4)/4 = **2.5 units**  Average TAT = (3+10+3+8)/4 = **6 units**

**Q3. Explain Round Robin (RR) Scheduling with its advantages and disadvantages.**
- Each process gets a fixed **time quantum**; if it doesn't finish, it's preempted and moved to the back of the ready queue, and the next process runs.
- Designed for time-sharing systems — fair and preemptive.
- *Advantages:* no starvation, fair (equal CPU share), supports preemption, easy to implement.
- *Disadvantages:* high average waiting time with many processes; too small a quantum causes excessive context switching; ignores process priority.
- *Key design factor:* choosing the time quantum — too large behaves like FCFS, too small increases overhead.

**Q4. Explain Priority Scheduling (Preemptive and Non-Preemptive) with an example.**
- Each process is assigned a priority; the CPU goes to the highest-priority process (by convention, a **lower number = higher priority**).
- **Non-preemptive:** once a process starts, it isn't interrupted even if a higher-priority process arrives.
- **Preemptive:** a newly arrived higher-priority process preempts the running one.
- *Advantages:* important tasks finish first, useful for real-time systems.
- *Disadvantages:* risk of starvation for low-priority processes; solved with **aging**.

Example (Non-preemptive; priority order P2 > P5 > P1 > P3 > P4):
| Process | Priority | BT | AT | CT | TAT | WT |
|---|---|---|---|---|---|---|
| P1 | 3 | 10 | 0 | 16 | 16 | 6 |
| P2 | 1 | 1 | 0 | 1 | 1 | 0 |
| P3 | 4 | 2 | 0 | 18 | 18 | 16 |
| P4 | 5 | 1 | 0 | 19 | 19 | 18 |
| P5 | 2 | 5 | 0 | 6 | 6 | 1 |

Average WT = **8.2 units**  Average TAT = **12.0 units**

**Q5. Compare FCFS, SJF, Round Robin, and Priority Scheduling.**
| Algorithm | Preemptive? | Best for | Main Weakness |
|---|---|---|---|
| FCFS | No | Batch systems | Convoy effect, poor for short jobs |
| SJF/SRTF | Both variants exist | Minimizing avg. waiting time | Needs burst time in advance; starves long jobs |
| Round Robin | Yes | Time-sharing/interactive systems | Higher avg. waiting time; overhead from context switches |
| Priority | Both variants exist | Real-time/important-task systems | Starvation of low-priority jobs (fixed by aging) |

**Q6. What are Multilevel Queue (MLQ) and Multilevel Feedback Queue (MLFQ) Scheduling?**
- **Multilevel Queue (MLQ):** the ready queue is split into several separate queues (e.g., foreground/interactive vs. background/batch), each with its own scheduling algorithm; processes are permanently assigned to one queue based on type, and queues themselves are scheduled with fixed priority or time-slicing between them.
- **Multilevel Feedback Queue (MLFQ):** similar to MLQ, but processes can **move between queues** based on behavior — a CPU-bound process that uses its full time quantum may be pushed to a lower-priority queue, while an I/O-bound process may be promoted. This allows the scheduler to adapt to a process's behavior over time and helps prevent starvation.

---

## Unit 6: Shell Commands

### Short Questions (5 Marks)

**Q1. What is a Shell? What are the major shell families in UNIX/Linux?**
- A shell is a program that bridges the user and the OS kernel, starting at login/terminal open, letting users run commands, programs, and scripts.
- **Bourne Shell family** (prompt `$`): `sh`, `ksh`, `bash` (most popular), POSIX `sh`.
- **C Shell family** (prompt `%`): `csh`, `tcsh`.

**Q2. Explain the purpose of the following commands: `pwd`, `ls`, `cd`, `mkdir`, `touch`.**
- `pwd` — prints the current working directory.
- `ls` — lists files/folders in the current directory (`-a` all files, `-l` long/detailed listing).
- `cd` — changes directory (`cd ..` moves up one level; `cd` alone goes to home).
- `mkdir` — creates a new directory (can create several at once, e.g., `mkdir dir1 dir2`).
- `touch` — creates a new empty file, or updates its timestamp if it exists.

**Q3. Differentiate between `cp` and `mv` commands.**
- `cp source destination` — **copies** a file/directory; original remains.
- `mv source destination` — **moves** or **renames** a file/directory; original is gone from the old location.

**Q4. What is the difference between `rm` and `rmdir`?**
- `rm filename` — removes files (`rm -r` removes directories recursively; `rm *` removes all files).
- `rmdir dirname` — removes an **empty** directory only (`rmdir -p` removes nested empty directories).

**Q5. Explain the difference between `cat filename`, `cat > filename`, and `cat >> filename`.**
- `cat filename` — displays file contents.
- `cat > filename` — creates/overwrites a file with new typed content.
- `cat >> filename` — appends new content to an existing file without erasing it.

**Q6. What do the commands `uname -r`, `uname -m`, and `uname -n` show?**
- `uname -r` — shows the kernel version.
- `uname -m` — shows the CPU architecture (x86, x86_64, etc.).
- `uname -n` — shows the network/hostname.

**Q7. What is the use of the `wc` command?**
- Counts words, lines, and bytes/characters in a file.
- `wc filename` — lines, words, bytes; `wc -l` — lines only; `wc -c` — bytes only.

**Q8. Explain the `head` and `tail` commands.**
- `head filename` — shows the first 10 lines by default (`head -5` → first 5 lines; `head -6c` → first 6 characters).
- `tail filename` — shows the last 10 lines by default (`tail -5` → last 5 lines).

**Q9. What does the `sort` command do? Give examples.**
- Sorts lines of a file alphabetically/numerically.
- `sort filename` — normal ascending sort; `sort -r` — reverse order; `sort -u` — unique lines only; `sort -k 2` — sort by the 2nd field.

**Q10. Explain the `cut` command with an example.**
- Extracts specific fields or characters from each line.
- `cut -d, -f1,3 filename` — `-d,` sets delimiter as comma, `-f1,3` extracts fields 1 and 3.
- `cut -c 1-4 filename` — extracts characters at positions 1–4.

---

### Broad Questions (10 Marks)

**Q1. Explain the `grep` command with its common options and examples.**
- `grep` searches a file for lines matching a given pattern and prints only the matching lines.
- Syntax: `grep "pattern" filename` — e.g., `grep "Mohsin" students.txt`.
- Common options:
  - `-i` — case-insensitive search (e.g., `grep -i "Passed" students.txt`).
  - `-n` — show line numbers of matches.
  - `-v` — invert match, showing lines that do **not** contain the pattern.
  - `-w` — match the whole word only (avoids partial matches inside other words).
  - `-c` — count how many lines contain the pattern.
  - `-o` — print only the matched text, not the whole line.
- `grep` is widely used for filtering log files, searching source code, and scripting text-processing pipelines.

**Q2. Explain File Permissions in Linux, including ownership types and numeric permissions, with `chmod` examples.**
- Linux supports multiple users, so it enforces two levels of security:
  1. **Ownership** — every file/directory has an owner controlling it.
  2. **Permissions** — define what actions can be performed.
- **Ownership types:**
  - **User (u):** the file's creator/owner.
  - **Group (g):** a set of users sharing the same permissions.
  - **Others (o):** everyone else.
- **Permission types:**
  | Permission | Symbol | Meaning | Value |
  |---|---|---|---|
  | Read | r | View file contents | 4 |
  | Write | w | Modify file | 2 |
  | Execute | x | Run file / enter directory | 1 |
- **Numeric permissions** are the sum of r+w+x values for each of user/group/others, e.g., `rwx = 4+2+1 = 7`, `rw- = 6`, `r-- = 4`.
- **`chmod`** changes permissions: `chmod <permissions> <filename>`.
  - `chmod 644 file.txt` → owner: read+write (6), group: read-only (4), others: read-only (4).
  - `chmod 754 dir2sub/os1.txt` → owner: rwx (7), group: r-x (5), others: r-- (4).
  - `chmod 700 backup` → only the owner has full access; group/others have none.

**Q3. Explain useful shell commands for viewing system and date/time information: `date`, `cal`, `who`, `whoami`, `history`.**
- `date` — shows current date and time; format flags allow custom output, e.g., `date +%m` (month), `date +%d` (day), `date +%H` (hour), `date +%M` (minute), `date +%r` (12-hour time).
- `cal` — displays a calendar for the current month; `cal -3` shows previous, current, and next month.
- `who` — shows which users are currently logged in.
- `whoami` — shows the current logged-in username.
- `history` — displays previously executed commands in the session.
- `clear` — clears the terminal screen.
- `man command_name` (or `command --help`) — shows the manual/help for a command.

**Q4. Explain text-processing commands `wc`, `sort`, `head`, `tail`, `cut`, and `paste` with examples, and describe how they can be combined in practice.**
- `wc filename` — counts lines, words, and bytes (`-l` lines only, `-c` bytes only).
- `sort filename` — sorts lines; `-r` reverse, `-u` unique only, `-k 2` sort by field 2.
- `head`/`tail` — show the first/last N lines (or characters with `-Nc`) of a file — useful for previewing large files or log tails.
- `cut -d, -f1,3 filename` — extract fields 1 and 3 using comma as the delimiter; `cut -c 1-4` extracts by character position.
- `paste file1 file2` — joins files line by line (default delimiter: TAB); `paste -d, file1 file2` uses a custom delimiter (comma).
- **Combined example workflow:** `cat file1.txt file2.txt > merged.txt` (merge files) → `grep "keyword" merged.txt` (filter relevant lines) → `sort -u` (remove duplicates) → `cut -d, -f1,3` (extract needed fields) — a typical pipeline for processing structured text/log data from the command line.
